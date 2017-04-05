<?php

    class Connect {
        public $connt; // Variable de connection

        function __construct(){ // Constructeur
            $this->connt = new PDO ("mysql:host=localhost;dbname=personne", "root", ""); // Instance PDO -> Connection bdd
            $this->connt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Gestion des error
            return $this->connt; // return var
        }
            /*
            *   Fonction d'insertion de donnée dans la table utilisateur
            *   $nom est un string
            *   $prenom est un string
            *   $post est un string
            *   return l'id de l'utilisateur => int
            */

        function insert($nom, $prenom, $post){
            $this->connt->query(
                "INSERT INTO `utilisateur`(`nom`, `prenom`, `post`) 
                VALUES ('".$nom."','$prenom','$post')"
                );
            return $this->connt->lastInsertId();
        }

        function read($id){
            $data = $this->connt->query("SELECT * FROM utilisateur WHERE id_utilisateur = $id");
            $result = $data->fetch(PDO::FETCH_ASSOC);
            //var_dump($this);die();
            return $result;
        }

        function readAll(){
            $data = $this->connt->query("SELECT * FROM `utilisateur`");
            $result = $data->fetchAll(PDO::FETCH_ASSOC);
            var_dump($this);die();
            return $result;
        }

        function update($id, $nom, $prenom, $post){
            $this->connt->query("UPDATE `utilisateur` SET `nom`='$nom',`prenom`='$prenom',`post`= '$post' WHERE `id_utilisateur` = $id");
        }

        function delete($id){
            $this->connt->query("DELETE FROM `utilisateur` WHERE `id_utilisateur` = $id");
        }

        static function readAllStatic(){
            $connetc = new PDO ("mysql:host=localhost;dbname=personne", "root", ""); // Instance PDO -> Connection bdd
            $connetc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Gestion des error
            $data = $connetc->query("SELECT * FROM `utilisateur`");
            $result = $data->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
    }