---
title: Sample Healthcare API
description: Endpoint untuk membuat rekam medis pasien setelah kunjungan.
tags: [ Developer Documentation, Health Information System, REST API ]
date: 2026
weight: 3
---


## 1. Endpoint overview

| Method | Post |
|--|--|
| Endpoint | /api/emr/medical-records |
| Authorization | Bearer Token (JWT)--Role: Doctor|
| Deskripsi | Endpoint untuk membuat rekam medis pasien setelah kunjungan. |

## 2. Authorization rule
> [!WARNING]
> **Limited Access — Doctor only**  
> Hanya pengguna dengan role doctor yang dapat memanggil endpoint ini.

## 3. Request example (JSON)

### Header
```http
POST /api/emr/medical-records
Host: api.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type:application/json
```
### Request Body
```json
{
    "patient_id": "PAT-001",
    "visit_id": "VIS-001",
    "doctor_id": "DOC-001",
    "subjective": "pasien mengeluh sakit kepala sejak 2 hari lalu. Tdak ada demam",
    "objective": "Tekanan darah 120/80, suhu 36.5°C",
    "assessment": "Tension headache",
    "plan": "Istirahat dan paracetamol 500mg",
    "diagnosis_codes": ["G44.2"],
    "is_final": false
}
```

## 4. Success response example

```json
HTTP/1.1 201 Created
Content-Type: application/json
{
    "status":  "success", 
    "data": {
      "record_id": "REC-20260310-001",
      "patient_id": "PAT-001",
      "visit_id": "VIS-001",    
      "doctor_id": "DOC-001",    
      "is_final": false,    
      "status": "draft",    
      "created_at": "2026-03-10T10:30:20Z",
       "audit_id":   "AUD-20240915-3309",
    },
    "request_id": "req-7f3a9c12"
}
```
## 5. Error response examples
**400 Bad Request**
```json
{
    "status": "error",  
    "error_code": "EMR-4001",  
    "http_status": 400,  
    "message": "Request body tidak valid.",  
    "detail": {    
      "field": "visit_id",    
      "issue": "visit_id VIS-20240915-0099 tidak ditemukan atau sudah memiliki rekam medis."  
      },  
    "request_id": "req-7f3a9c12"
}
```
**403 Forbidden**
```json
{
    "status": "error",
    "error_code": "EMR-4030",  
    "http_status": 403,
    "message": "Akses ditolak. Hanya dokter yang dapat membuat rekam medis.",
    "request_id": "req-7f3a9c12"
}
```


## 6. Field-level explanation
| Name | Data Type | Required/optional | Description |
|--|--|--|--|
| patient_id | string |required| Nomor id pasien yang terdaftar sistem dan aktif.|
|visit_id|string| required |id kunjungan. Kunjungan yang belum memiliki rekam medis. |
| doctor_id | string | required | id dokter. Harus cocok dengan identitas dokter dalam JWT token yang digunakan. |
| subjective | string  | required | Keluhan utama pasien. |
| objective | string | required | Hasil pemeriksaan oleh dokter seperti tanda vital dan hasil lab. |
| assessment | string | required | Interpretasi klinis dokter berdasarkan data subjektif dan objektif. |
| plan | string | required | Rencana tindak lanjut pengobatan oleh dokter. |
| diagnosis_codes | array of string | optional | Kode diagnosis pasien. Maks. 10 kode |
| is_final | boolean | optional (default: false) | default: false. Jika true, rekam medis tidak bisa diubah. |

## 7. Business & technical rules

1. patient_id & visit_id harus valid, aktif, dan terdaftar di sistem. Request dengan ID yang tidak terdaftar akan mengirimkan error 400 bad request.
2. Satu visit_id hanya boleh memiliki satu rekam medis.
3.  Hanya role doctor yang bisa memanggil endpoint ini. Role lain akan mendapat error response 403 Forbidden.
4. Jika is_final = true, rekam medis langsung dikunci. Endpoint patch tidak bisa menerima perubahan.
5. Kode ICD-10 divalidasi terhadap database kode aktif WHO. Kode tidak valid maka error response 400 bad request.
6. Seluruh field SOAP wajib diisi meskipun is_final = false. Tidak ada partial save.

## 8. Notes penting (compliance, audit, data locking)

**Compliance Note**
> [!important]
> Data yang diinput melalui endpoint ini diakui sebagai Rekam Medis Elektronik (RME) resmi yang wajib memenuhi standar keamanan, kerahasiaan, dan akurasi sesuai Permenkes No. 24 Tahun 2022, serta terintegrasi dengan platform SATUSEHAT Kemenkes. 
>
>Pastikan field subjective, objective, assessment, dan plan diisi dengan informasi klinis yang akurat.

**Audit**
> [!note]
> Setiap pemanggilan endpoint baik berhasil maupun gagal menghasilkan entri audit log yang immutable--tidak dapat dihapus oleh siapapun termasuk admin.

**Data Locking**
> [!caution]
> Rekam medis dengan is_final = true bersifat immutable--tidak dapat diubah oleh siapapun termasuk admin. Jika dokter perlu melakukan koreksi setelah finalisasi, prosedur addendum harus digunakan melalui endpoint terpisah, bukan modifikasi langsung.