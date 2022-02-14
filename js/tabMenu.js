/**
 * tabMenu.js
 **/

$(function(){
    // $로 시작하는 변수는 jquery 전용 변수 - 선택자로 선택된 태그의 참조값을 저장할 때 주로 jquery 전용변수 사용
    var $tabContent = $('#tabContent div') ; //tabContent box를 참조하는 변수 - div 4개 - tab menu 항목에 보여질 이미지
    // 시작하면 첫번째 메뉴 항목이 선택되어 있게 설정
    $('#tab li:first-child').addClass('selectedItem'); //미리 만들어놓은 selectedItem 클래스를 태그에 동적으로 부착

    $('#tab li').on('click',function(){ //탭 메뉴 항목 클릭시 - 탭메뉴(li)가 여러개가 있음 여러개 중 한개를 클릭하면 클릭된 li의 인덱스를 알 수 있음
        var index = $(this).index(); //클릭한 li의 index 반환

        //클릭한 탭 메뉴 항목을 선택된 이미지로 변경
        //1.기존에 적용된 selectedItem 클래스 제거
        $('#tab li').removeClass('selectedItem'); //설정된 클래스 제거
        //2. 현재 클릭한 li에만 selectedItem 클래스 추가
        $(this).addClass('selectedItem');

        //콘텐츠(tabContent) 이미지 변경
        //1. tabContent내의 모든 div 숨기고
        $tabContent.css('display','none');
        //2. 클릭한 탭메뉴 항목의 index에 해당되는 div만 보임
        $tabContent.eq(index).css('display','block');


    });
});//종료