<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- custom style link -->
  <link rel="stylesheet" href="./css/styles.css">

  <title>Shortly - URL shortening Website</title>
</head>
<body>
  
  <!-- header section START -->
  <header>
    <nav>
      <div class="nav-logo-container">
        <div class="nav-logo">
          <img src="./images/logo.svg" alt="">
        </div>
      </div>
      <div class="login-register-btn-container">
        <div class="login-btn">
          <a href="">Login</a>
        </div>
        <div class="register-btn">
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  </header>
  <!-- header section END -->

  <!-- hero section START -->
  <section id="hero-section">
    <div class="hero-section-container">
      <div class="hero-section-text-container">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <a href="">Get started</a>
        <!-- <div class="get-started-btn">
        </div> -->
      </div>
      <div class="hero-section-img-container">
        <img src="./images/illustration-working.svg" alt="">
      </div>
    </div>
  </section>
  <!-- hero section END -->

  <!-- main section START -->
  <main class="main-section">
    <div class="main-section-container">
      <div class="link-processing-section-container">
        <div class="link-input-wrapper">
          <form id="process-link-form" action="">
              <input type="text" placeholder="Shorten a link here...">
            <input type="submit" value="Shorten it!">
            <span class="error-msg">Please add a link</span>
            <span class="invalid-url-msg">URL format should be: https://www.nameofyoursite.com/</span>
          </form>
        </div>
        <div class="processed-links-results-wrapper">
          <div class="processed-link">
            <div class="original-link">
              <p></p>
            </div>
            <div class="short-link">
              <p></p>
              <div class="copy-link-btn">
                <button>Copy</button>
                <button class="copied">Copied</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="statistics-section">
        <div class="stats-section-intro">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advance statistics dashboard</p>
        </div>
        <hr>
        <div class="features-box-container">
          <div class="features-box">
            <div class="svg-wrapper">
              <img src="./images/icon-brand-recognition.svg" alt="">
            </div>
            <h1>Brand Recognition</h1>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div class="features-box">
            <div class="svg-wrapper">
              <img src="./images/icon-detailed-records.svg" alt="">
            </div>
            <h1>Details Record</h1>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          
          </div>
          <div class="features-box">
            <div class="svg-wrapper">
              <img src="./images/icon-fully-customizable.svg" alt="">
            </div>
            <h1>Fully Customizable</h1>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- main section END -->

  <!-- footer section START -->
  <footer>
    <h1>Shortly</h1>
  </foot>
  <!-- third section END -->



  <script src="./js/scripts.js"></script>
</body>
</html>