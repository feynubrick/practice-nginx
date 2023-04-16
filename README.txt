# Nginx 설정 파일

nginx 디렉토리에 있는 내용을 copy해서 다음 경로에 복사/붙여넣기 합니다.

MacOS에서 homebrew를 이용해 설치한 경우, 경로는 다음과 같습니다.
```
/usr/local/etc/nginx/
```

다음 명령어로 복사/붙여넣기 합니다.

```
$ cp ./nginx/* /usr/local/etc/nginx/
```

다음 명령어로 nginx를 재시작해주세요.

```
$ nginx -s reload
```
