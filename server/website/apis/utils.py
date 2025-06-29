import cloudinary.uploader

def cloudinary_uploader(file):
    result = cloudinary.uploader.upload(file)
    return result['secure_url']