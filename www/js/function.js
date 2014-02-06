$( document ).tooltip({
    position: {
    my: "center top",
    at: "center bottom+5",
    },
    show: {
    duration: "fast"
    },
    hide: {
    effect: "hide"
    }
});
function sblocca(file,id){
   $( "#dialog-message" ).dialog({
     modal: true,
     open: function () {$('#sbloccamail-id').blur();},
     buttons: {
       "Sblocca Mail": {
          id: "sbloccamail-id",
          text:"Sblocca Mail",
          title:"Invia la mail bloccata sul suo indirizzo di posta.",
          click: function() { 
            $('#sbloccamail-id').addClass("ui-icon-refresh");
            $.ajax({
                 url: "/rinviamail.php?file="+file
            }).done(function(data) {
                if(data=="ok"){
                     $('#sbloccamail-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#sbloccamail-id .ui-button-text').html("Mail Spedita");
                   //  $('#tr_'+id).hide();
                     $('.ui-tooltip').hide(500);
                }   
                if(data=="error"){
                     $('#sbloccamail-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#sbloccamail-id .ui-button-text').html("Mail Spedita");
                   //  $('#tr_'+id).hide();
                     $('.ui-tooltip').hide(200);
                     
                }
            });
            }
         }
       ,
       "Whitelist": {
          id: "whitelist-id",
          text:"Whitelist Azienda",
          title:"Disabilita il controllo antispam per questo mittente. Da applicare a mittenti con cui si lavora giornalmente.",
          click: function() { 
            $('#whitelist-id').addClass("ui-icon-refresh");
            $.ajax({
                 url: "/whitelist_domain.php?file="+file
            }).done(function(data) {
                if(data=="ok"){
                     $('#whitelist-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#whitelist-id .ui-button-text').html("Confermato");
                     $('.ui-tooltip').hide(500);
                }
            });
            }
         }
       ,
                       
    }
   });
}



function sbloccaStorico(file,id){
   $( "#dialog-message" ).dialog({
     modal: true,
     open: function () {$('#sbloccamail-id').blur();},
     buttons: {
       "Sblocca Mail": {
          id: "sbloccamail-id",
          text:"Sblocca Mail",
          title:"Invia la mail bloccata sul suo indirizzo di posta.",
          click: function() { 
            $('#sbloccamail-id').addClass("ui-icon-refresh");
            $.ajax({
                 url: "/rinviamailStorico.php?file="+file
            }).done(function(data) {
                if(data=="ok"){
                     $('#sbloccamail-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#sbloccamail-id .ui-button-text').html("Mail Spedita");
                   //  $('#tr_'+id).hide();
                     $('.ui-tooltip').hide(500);
                }   
                if(data=="error"){
                     $('#sbloccamail-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#sbloccamail-id .ui-button-text').html("Mail Spedita");
                   //  $('#tr_'+id).hide();
                     $('.ui-tooltip').hide(200);
                     
                }
            });
            }
         }
       ,
       "Whitelist": {
          id: "whitelist-id",
          text:"Whitelist Azienda",
          title:"Disabilita il controllo antispam per questo mittente. Da applicare a mittenti con cui si lavora giornalmente.",
          click: function() { 
            $('#whitelist-id').addClass("ui-icon-refresh");
            $.ajax({
                 url: "/whitelist_domain.php?file="+file
            }).done(function(data) {
                if(data=="ok"){
                     $('#whitelist-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#whitelist-id .ui-button-text').html("Confermato");
                     $('.ui-tooltip').hide(500);
                }
            });
            }
         }
       ,
                       
    }
   });
}



function elimina(file,id){
     $( "#elimina-message" ).dialog({
     modal: true,
     buttons: {
       "Conferma": {
          id: "conferma-id",
          text:"Conferma",
          click: function() { 
            $('#conferma-id').addClass("ui-icon-refresh");
            $.ajax({
                 url: "/eliminamail.php?file="+file
            }).done(function(data) {
                if(data=="ok"){
                     $('#conferma-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#conferma-id .ui-button-text').html("Eliminato");
                     $('#tr_'+id).hide();
                     $('.ui-tooltip').hide(500);
                     $("#elimina-message").dialog( "close" );
                }   
                else{
                     $('#conferma-id').removeClass("ui-icon-refresh").addClass("ui-button-disabled").attr("disabled", "disabled");
                     $('#conferma-id .ui-button-text').html("Errore");
                }
            });
            }
         }
       ,
                             
    }
   });
}

jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if($.support.placeholder) { 
        $(".descrizioneInput").hide();
   }
});
function aggiungiInWhitelist(){
    /*url=document.URL;
    if(url.indexOf("visualizzamail2.php")==-1){
        alert("presto disponibile");
        return;
    } */
    
    $("#dialog-form" ).dialog({
     //autoOpen: false,
     height: 320,
     width: 350,
     modal: true,
     buttons: {
       "Conferma":{
       id: "confermawhitelist-id",
       text:"Conferma",
       click:function() {
           $('#confermawhitelist-id').addClass("ui-icon-refresh");
       
           dominio=$("#dominio").val();
           mailsingola=$("#mailcompleta").val();
           
           
           var patternDominio = /^@[\.a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
           var patternMailSingola = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           
           var mail="";
           var idAlert="";
           if(dominio.match(patternDominio)){
                  mail="dominio="+dominio;
                  idAlert="#inseritoDominio";
           }
           if(mailsingola.match(patternMailSingola)){
                  mail="mail="+mailsingola;
                  idAlert="#inseritaMail";
           }
           if(mail.length!=0){
             $.ajax({
                   url: "/aggiungiwhitelist.php?"+ mail
              }).done(function(data) {
                  $('#confermawhitelist-id').removeClass("ui-icon-refresh");
                  if(data=="ok"){
                      $(idAlert).show().delay(2000).hide("fade",{},2000);
                  }
                  else{
                      //console.log("Data: "+data);
                      //console.log("IDAlert: "+ idAlert);
                      alert(data);
                      
                  }

              });
            }
            else{
                  $('#confermawhitelist-id').removeClass("ui-icon-refresh");
                  alert("Non hai compilato i campi correttamente.\nSe hai problemi contatta l'ufficio Ced\nall'indirizzo ced@quadranteservizi.it");
            
            }
       }
       }
     },
    });   
}
