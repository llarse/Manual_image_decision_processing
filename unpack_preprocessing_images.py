import os
import zipfile

# Extract files from the zip file in zip_file_path and add them to kNFTs/persona_kNFTs
zip_file_path = os.path.join("preprocessed_photos.zip")
# extract_path = os.path.join()

with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    zip_ref.extractall()

# delete the zip file
os.remove(zip_file_path)
