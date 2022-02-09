# dataHouse_Project



master 브랜치에는 절대 push 하지 말것!!


깃허브에서 파일을 가져올 때는 master 브랜치 내용을 pull 하면 됨  // git pull origin master


각자 개인의 브랜치를 만들고 거기에 commit & push 하기 (제가 코드 제대로 돌아가는 거 확인 되면 master로 merge 할 예정입니다.)


공통 파일(이미지, css)은 확정되면 master에 올릴 예정



<파이참과 깃허브 연동하기>
  1) 파이참 new Project 생성
  2) Terminal - Git Bash 열기
  3) git init (처음 할 때만 실행)
  4) git add . 
  5) git commit -m "first commit" (히스토리 생성)
  6) git remote add origin https://github.com/InterfaceProject-dataHouse/dataHouse_Project.git
  7) git push origin master
  ----------------------------------------------------------------------------------------------
  위 방법을 사용하지 않으면 VCS에 직접 url을 넣어 연동도 가능함 (참고 url: https://hoohaha.tistory.com/38)
  
  
  
  
  <commit & push>
  1) 코드 수정
  2) git commit -m "입력할 커밋 메시지"   // local branch와 원격 branch가 동일 해야 함 (git checkout 브랜치명)
  3) git push origin 브랜치명
  
  
  
  
  
