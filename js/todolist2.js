$(function () {
    // 读取本地存储数据
    function abc() {
        var data = localStorage.getItem('mn')
        if (data !== null) {
            return JSON.parse(data)
        } else {
            return []
        }

    }
    // 保存本地存储数据
    function save(data){
        localStorage.setItem('mn',JSON.stringify(data))
    }
    // 渲染本地数据
    function load(){
        var data=abc()
        $('ol,ul').empty()

    }


    $('#title').on('keydown', function (event) {
        if (event.keyCode == 13) {
            {
                if ($('#title').val() == '') {
                    alert('请您输入内容')
                } else {
                    var local = abc()
                    local.push({title:$(this).val(),done:false})




                }
            }
        }
    })
    // 删除数据
    $('ol,ul').on('click','a',function(){
        var data=abc()

    })
    // 渲染加载数据
    
})