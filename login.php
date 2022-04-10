<?php include_once "header.php"; ?>

<body>
    <div class="wrapper">
        <section class="form login">
            <header class="h1">Realtime Chat App by tousif</header>
            <form action="#">
                <div class="error-text"></div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email address">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your Password">
                    <i class="fas fa-eye"></i>
                </div>
                

                <div class="field button">
                    <input type="submit" value="Continue to chat">
                </div>



            </form>
            <div class="link">
                Not yet Signed up? <a href="index.php">Signup now</a>
            </div>






        </section>
    </div>
    <script src="javascript/pass-show-hide.js"></script>    
    <script src="javascript/login.js"></script>
</body>

</html>