import requests
API = "http://localhost:8081/parse"

if __name__ == "__main__":
    print("Running a test file")
    with open("test/example.py") as file:
        contents = file.read()
        full_url = f"{API}?pythonStr={contents}&showTree=true"
        response = requests.get(full_url)
        print(response.json())