$(document).ready(function () {

    var table = $('#myTable').DataTable({
        ajax: {
            'url':'MOCK_DATA.json', 
            'dataSrc':''
        },
        responsive: true,
        columns: [
            {"data": "id"},
            {"data": "first_name"},
            {"data": "last_name"}, 
            {"data": "email"}, 
            {"data": "gender"}, 
            {"data": "date"},
            {"data": "ip_address",
                "render": function(data, type){
                    if(type=='display'){
                        data = '<a href="'+ data + '">' + data + '</a>';
                    }
                    return data;
                }}
        ],
        "language": {
            "emptyTable": "데이터가 없어요.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "_PAGE_ PAGE / _PAGES_ PAGE",
            "infoEmpty": "데이터 없음",
            "infoFiltered": "( _MAX_ 개의 데이터 중 필터링됨 )",
            "search": "에서 검색: ",
            "zeroRecords": "일치하는 데이터가 없어요.",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전"
            }
        }
    });

    /* Column별 검색기능 추가 */
    $('#myTable_filter').prepend('<select id="select"><option>id</option><option>first_name</option><option>last_name</option><option>email</option><option>gender</option><option>ip_address</option></select>');

    $('.dataTables_filter input').unbind().bind('keyup', function () {
        var colIndex = document.querySelector('#select').selectedIndex;
        table.column(colIndex).search(this.value).draw();
    });


});