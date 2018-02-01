<?php
class MySqlConnection{
    public $host;
    public $db_name;
    public $db_user;
    public $db_pwd;


    public function __construct($host,$db_name,$db_user,$db_pwd)
    {
        $this->host=$host;
        $this->db_name=$db_name;
        $this->db_user=$db_user;
        $this->db_pwd=$db_pwd;
    }
    public function  getConnection(){
        try{
            $this->pdo=new PDO('mysql:hose='.$this->host.";dbname=" .$this->db_name,$this->db_user,$this->db_pwd);//创建一个PDO对象
            // echo "链接成功！";
        }
        catch(PDOException $e){
            echo "Error! : " .$e->getMessage()."<br/>";
            die();
        }
    }
    public function updateSql($sql)
    {
        if($this->pdo==null){
            $this->getConnection();
        }
        $res=$this->pdo->exec($sql);
        echo json_encode(array('data'=>$res));
        $this->closeConnection();
    }
    public function closeConnection()
    {
        $this->pdo=null;
    }
}

    $prasieConnetcion =new  MySqlConnection('localhost','yideng','root','root');
    $prasieConnetcion->updateSql("UPDATE praisecount SET counts=counts+1 WHERE id=1");

?>