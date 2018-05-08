<?php
session_start();
require_once ('conn.php');
$action = $_GET['action'];
if ($action == 'login') {  //登录
    $user = stripslashes(trim($_POST['user']));
    $pass = stripslashes(trim($_POST['pass']));
    $phone = stripslashes(trim($_POST['phone']));
    if (empty ($user)) {
        echo '用户名不能为空';
        exit;
    }
    if (empty ($pass)) {
        echo '密码不能为空';
        exit;
    }
 if (empty ($phone)) {
        echo '手机号不能为空';
        exit;
    }
    $query = mysql_query("select * from user where userId='$user'");

    $us = is_array($row = mysql_fetch_array($query));

    //$ps = $us ? $md5pass == $row['password'] : FALSE;

    $ps = $us ? $pass == $row['userpwd'] : FALSE;
    $arr['row'] = $row;
    if ($ps) {
  $rs = true;
        if ($rs) {
            $arr['success'] = 1;
            $arr['msg'] = '登录成功！';
            $arr['user'] = $_SESSION['user'];
            $arr['login_time'] = date('Y-m-d H:i:s',$_SESSION['login_time']);
            $arr['login_counts'] = $_SESSION['login_counts'];
        } else {
            $arr['success'] = 0;
            $arr['msg'] = '登录失败';
        }
    } else {
        $arr['success'] = 0;
        $arr['msg'] = '用户名或密码错误！';
    }
    echo json_encode($arr); //输出json数据
}
elseif ($action == 'logout') {  //退出
    unset($_SESSION);
    session_destroy();
    echo '1';
}?>