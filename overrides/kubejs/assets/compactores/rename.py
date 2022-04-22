import os

def main():
	folder = "textures"
	for count, filename in enumerate(os.listdir(folder)):
		dst = filename[0:-3]
		src = f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
		dst = f"{folder}/{dst}"
		
		# rename() function will
		# rename all the files
		os.rename(src, dst)

if __name__ == '__main__':
	# Calling main() function
	main()