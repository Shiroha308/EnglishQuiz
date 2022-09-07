<?php
//
//このファイルはregister.php入力後、ユーザー登録の可否を検討するファイルです。
//

//リダイレクトして、二重投稿を防ぐ

require_once 'environment.php';

class userinfo{
    //ユーザーを登録する
    //
    //
    public static function createUser($userData){
    //プレースホルダー

    $result = false;
    $sql = 'INSERT INTO logindata (name, email, password) VALUES (?,?,?)';

    //ユーザーデータを受け取って、配列へ格納
    $arrayuser = [];
    $arrayuser[] = $userData['username'];//name
    $arrayuser[] = $userData['email'];//email
    $arrayuser[] = password_hash($userData['password'],PASSWORD_DEFAULT);//password※ハッシュ化する。

    //配列として格納されているか確認
    
    try{
        //DBを呼び出す
        $exe = connect()->prepare($sql);
        $return = $exe->execute($arrayuser);
        return $result; 
    } catch(PDOException $e){
        echo '登録に失敗しました。<br>'.$e->getMessage(); 
    }
    }

    //ログインした後の処理
    //top.php48行目以降に関数呼び出し情報を記載
    public static function login($email , $password){
    $result  = false;
    //ユーザーをemailから検索して取得する
    $user = self::getUserByEmail($email);
    var_dump($user);

    if(!$user){
        $_SESSION['msg'] = 'Emailが一致しません。';
        return $result;
    }
    
    //パスワードの照会を行う

    if (password_verify($password, $user['password'])){
        //セッションハイジャック対策
        session_regenerate_id(true);
        //loginuserへ$userの値を格納する。
        $_SESSION['login_user'] = $user;
        $result = true;
        return $result;
    }
        $_SESSION['msg'] = 'パスワードが一致しません。';
        return $result;
    }

    //Emailを下記の順番で取得する。
    //SQLを準備
    //SQLの実行
    //SQLの結果を返す
    public static function getUserByEmail($email){
        //プレースホルダー
        $sql = 'SELECT * FROM logindata WHERE email = ?';
        //Emailを配列へ格納
        $arrayuser = [];
        $arrayuser[] = $email;
        //配列として格納されているか確認
        try{
            //DBを呼び出す
            $exe = connect()->prepare($sql);
            $exe->execute($arrayuser);
            //SQLの結果をfetchで返す
            $user = $exe->fetch();
            return $user; 
        } catch(PDOException $e){
            echo '登録に失敗しました。<br>'.$e->getMessage(); 
            return false;
        }       
    }
}
?>