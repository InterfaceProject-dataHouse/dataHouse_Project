# dataHouse_Project

## 프로젝트 내용
- CGV 홈페이지의 메인, 아트하우스 클론코딩
- 로그인 및 회원가입 페이지 구성 및 기능 구현
- 무비차트 상세보기 및 후기작성 페이지 구성

### static 파일 설명
![image](https://user-images.githubusercontent.com/81951233/191897390-8cfedb6e-9854-4932-ae2a-471a3708e31c.png)

### Django 구조도
![image](https://user-images.githubusercontent.com/81951233/191897419-36c6424f-fa03-471d-90ae-846227f4ce57.png)



----------------------------------------------------------------------------------------------------------------------------------------------------------
## master 브랜치에는 절대 push 하지 말것!!


깃허브에서 파일을 가져올 때는 master 브랜치 내용을 pull 하면 됨  // git pull origin master


각자 개인의 브랜치를 만들고 거기에 commit & push 하기 (제가 코드 제대로 돌아가는 거 확인 하고 master로 merge 할 예정입니다.)

commit message는 자신이 수정한 내용 잘 드러나게 작성하기

공통 파일(이미지, css)은 확정되면 master에 올릴 예정



### <파이참과 깃허브 연동하기>
  1) 파이참 new Project 생성
  2) Terminal - Git Bash 열기
  3) git init (처음 할 때만 실행)
  4) git add . 
  5) git commit -m "first commit" (히스토리 생성)
  6) git remote add origin https://github.com/InterfaceProject-dataHouse/dataHouse_Project.git
  7) git push origin master
  ----------------------------------------------------------------------------------------------
  위 방법을 사용하지 않으면 VCS에 직접 url을 넣어 연동도 가능함 (참고 url: https://hoohaha.tistory.com/38)
  
  
  
  
###  <commit & push>
  1) 코드 수정
  2) git commit -m "입력할 커밋 메시지"   // local branch와 원격 branch가 동일 해야 함 (git checkout 브랜치명)
  3) git push origin 브랜치명
  
 
 모든 브랜치 확인 명령어: git branch -a
  
  ---------------------------------------------------------------------
  명령어 쓰지 않고 파이참 UI 이용해도 됨
  
  
  
 
