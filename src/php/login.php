<?php
    header("content-type:text/html;charset=utf8");
    include('common/public.php');

    $uname = $_POST['uname'];
    $upwd = $_POST['pwd'];

    $sql = "select * from userinfo where uname = '$uname'";
    //执行
    $res = mysqli_query($connect,$sql);
    //拿取
    $arr = mysqli_fetch_assoc($res);
    if($arr){
        //对密码进行判断
        if($arr['pwd'] == $upwd){
            echo json_encode(array(
                'state' => '1',
                'info' => '登陆成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '2',
                'info' => '密码错误'
            ));
        }
    }else{
        echo json_encode(array(
            'state' => '3',
            'info' => '用户名不存在'
        ));
    }
?>