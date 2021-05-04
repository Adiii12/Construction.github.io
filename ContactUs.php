<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Hello, world!</title>
    <!------ ContactUs css link ---------->
    <link rel="stylesheet" href="css/ContactUs.css">
  </head>
  <body>

  <!-- navBar php link -->
  
     <!-- navBar php link -->
       <?php include 'navBar.php'; ?>
  



    <section class="container-fluid" id="contactUS-header">
      <h1>CONTACT US NOW</h1>
    </section>
    <section class="container-fluid google-map">
         <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0088893976035!2d71.44991151469763!3d33.992305428334795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91134d43b32bf%3A0x1fb24c07034bf7d1!2sHayatabad%20medical%20Complex%20Ms%20flats!5e0!3m2!1sen!2s!4v1612134311226!5m2!1sen!2s" 
           width="100%" height="400" frameborder="0" style="border:2px solid  brown;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></p>
    </section>
      
    <!--------------------------- contact us form start------------------------->
      <section class="container-fluid my-5 contactUS-form">
          <h1>SEND US MESSAGE</h1>
            <div class="container">
                <form action="_links/emailProcess.php" method="POST">
                  <div class="row Name-Email-subject">
                     <div class="col-sm-12 col-md-4">
                          <div class="form-group contactName">
                            <input type="text" class="form-control" name="name" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name">
                          </div>
                     </div>
                     <div class="col-sm-12 col-md-4" >
                         <div class="form-group contactEmail">
                            <input type="email"  class="form-control" name="email" id="exampleInputEmail" placeholder="Email">
                            <small id="nameHelp"  class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                     </div>
                     <div class="col-sm-12 col-md-4">
                         <div class="form-group">
                             <input type="text" name="subject" class="form-control" id="exampleInputSubject" placeholder="Subject">
                         </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-12 col-md-12 col-lg-12">
                         <div class="form-group contactMessage">
                             <label for="exampleInputMessage">Password</label>
                             <input type="text" name="message" class="form-control" id="exampleInputMessage" placeholder="Message">
                         </div>
                     </div>
                  </div>
        
                      <button type="submit" class="btn">SEND US MESSAGE</button>
                 </form>
            </div>
      </section>
    <!--------------------------- contact us form end------------------------->
   


    <!------------- footer php link --------------->
     <?php include 'footer.php' ?>



     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
       <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    
    <script src="./Js/ContactUs.js"></script>
  </body>
</html>