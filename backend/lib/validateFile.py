from fastapi import UploadFile, HTTPException
MAX_FILE_SIZE = 10 * 1024 * 1024

def validate_file_size(file: UploadFile):
    file.file.seek(0, 2)
    size = file.file.tell()
    file.file.seek(0)

    if size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="File size exceeds 10MB limit"
        )