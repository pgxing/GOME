<?php
    header("content-type:text/html;charset=utf8");
    include('common/public.php');

    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];

    $sql = "select * from userinfo where uname = '$uname'";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '用户名已存在'
        ));
    }else{
        //添加
        $add = "insert into userinfo (uname,pwd) values ('$uname','$upwd')";
        mysqli_query($connect,$add);
        echo json_encode(array(
            'state' => '1',
            'info' => '注册成功'
        ));
    }
?>