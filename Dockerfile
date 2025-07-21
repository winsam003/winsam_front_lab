# base image
FROM node:22

# 앱 디렉토리 생성
WORKDIR /app

# package.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 복사
COPY . .

# React dev 서버 실행
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
