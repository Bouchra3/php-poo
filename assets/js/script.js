$(function() { // Lecture au chargement du document
    var Bouchra = 1;
    function totalUser(total = false){
        $.ajax({
            url: "read.php",
            type: "POST",
            success: function (reponse){
                
                reponse = JSON.parse(reponse);  // Reponse est un tableau d'Objet

                if(total == false){
                    var option = "";
                    for(var elem in reponse){
                        option += "<option value='"+reponse[elem].id_utilisateur+"'>"+reponse[elem].nom+"</option>";
                    }
                    $("#listeUser").html(option);
                }else{

                    var tableau = "<tr><th>ID</th><th>Nom</th><th>Prenom</th><th>Post</th><th>Option</th></tr>";
                    for(var elem in reponse){
                        tableau += "<tr><td>"+reponse[elem].id_utilisateur+"</td><td>"+reponse[elem].nom+"</td><td>"+reponse[elem].prenom+"</td><td>"+reponse[elem].post+"</td><td><input type='submit' id='Search' class='Search' value='Search' Mike='"+reponse[elem].id_utilisateur+"'/><input type='submit' id='Delete' class='Delete' value='Delete' Mike='"+reponse[elem].id_utilisateur+"' /></td></tr>"
                    }
                    $("#tableau").html(tableau);

                }
                
                appelleJquery();
            }
        })
    }

    function cleanForm(){
       var input = $("input[type=text]");
       for(var i=0; i<input.length; i++){
           input[i].value= "";
       }
        
    }

    if($("#listeUser").length)
        totalUser();
    else
        totalUser(true);

    function appelleJquery(){  

          $("#Creat").on("click", function(e){
              
              $("#formulaire").show();
              Bouchra = 2;
          });

        // Function recherche 1 utilisateur
            $(".Delete").on("click", function(e){ // Evenement à l'envoi du formulaire -> Evenement = e
                
                var mydata = "id="+$(this).attr("Mike");
                
                if(confirm("Tu supprime ou pas ?")){
                    $.ajax({
                        url: "delete.php",
                        type: "POST",
                        data: mydata,
                        success: function (reponse){
                        cleanForm();
                        totalUser(true);
                        }
                    })
                }
            });
        // End

        // Function recherche 1 utilisateur
            $(".Search").on("click", function(e){ // Evenement à l'envoi du formulaire -> Evenement = e

                var mydata = "id="+$(this).attr("Mike");
                $.ajax({
                    url: "read.php",
                    type: "POST",
                    data: mydata,
                    success: function (reponse){
                        var utilisateur = JSON.parse(reponse);
                        $("#nom").val(utilisateur.nom);
                        $("#prenom").val(utilisateur.prenom);
                        $("#post").val(utilisateur.post);
                        $("#id").val(utilisateur.id_utilisateur);
                        $("#formulaire").show();
                        Bouchra = 1;
                        totalUser(true);
                    }
                })
            });
        // End

 

    }
    
        // Function add un utilisateur
            $("#formulaire").on("submit", function(e){ // Evenement à l'envoi du formulaire -> Evenement = e
                
                e.preventDefault(); // Annule l'even par default

                console.log($('#formulaire').serialize()); // Test recup champ input
                var myUrl = (Bouchra == 1)?"update.php":"create.php";
                $.ajax({
                    url: myUrl,
                    type: "POST",
                    data: $('#formulaire').serialize(),
                    success: function (reponse){
                        cleanForm();
                        $("#Mike").text("Votre utilisateur à bien été ajouteé");
                        console.log(reponse);
                        totalUser(true);
                       
                    }
                })

            });
        // End
})