function validateEmail(emailString) {
    var regX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return regX.test(emailString);
}

function setBindings() {

    //#region MISC

    $("#logo").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    $('.navLinks .listA').click(function(){
        $(this).addClass('currentPage').siblings('').removeClass('currentPage');
    });

    $("#singles tr:even").css({
        "background-color":"#dcdcdc"
    });    
    $("#doubles tr:odd").css({
        "background-color":"#dcdcdc"
    });

    $("#loginSubmit").click(function (evt) {
        evt.preventDefault();

        var logEM = $("#loginEM").val();
        var logPass = $("#loginPASS").val();

        if (logEM == ""){
            swal("Oops...", "Please Enter Your Email!", "error");
        } else if (!validateEmail(logEM)){
            swal("Oops...", "Please Enter a Valid Email!", "error");
        } else if (logPass == ""){
            swal("Oops...", "Please Enter Your Password!", "error");
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    loginEmail: logEM,
                    loginPassword: logPass
                }
            }).done(function (data) {
                if(data.charAt(0)>0) {
                    //console.log("Success");
                    window.location.href = "";
                } else {
                    console.log("Failed");
                    swal("Oops...", "Login Information is Invalid!", "error");
                }
            });

        }
    });

    //#endregion

    //#region Admin Functions
    $('#createMatches').click(function(){
        $('#createMatches').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"block"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});
    });
    $('#editMatches').click(function(){
        $('#editMatches').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});
        
        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"block"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        // $(".editSGLSMatch")[0].reset();
        // $(".editDBLSMatch")[0].reset();
    });
    $('#enterSGLSScores').click(function(){
        $('#enterSGLSScores').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"block"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        // $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#enterDBLSScores').click(function(){
        $('#enterDBLSScores').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"block"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        // $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#addAnnounce').click(function(){
        $('#addAnnounce').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"block"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        // $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#changePassword').click(function(){
        $('#changePassword').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"block"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        // $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#addPlayers').click(function(){
        $('#addPlayers').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"block"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        // $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updateEM")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#changeEmail').click(function(){
        $('#changeEmail').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"block"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".addAnnounce")[0].reset();
        // $(".updateEM")[0].reset();
        $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#changePhone').click(function(){
        $('#changePhone').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#loggoutt').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"block"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"none"});

        $(".enterSGLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        // $(".updatePN")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();
    });
    $('#loggoutt').click(function(){
        $('#loggoutt').css({"background-color":"#ECECEC","border-radius":"5px"});
        $('#createMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterSGLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#editMatches').css({"background-color":"white","border-radius":"5px"});
        $('#enterDBLSScores').css({"background-color":"white","border-radius":"5px"});
        $('#addAnnounce').css({"background-color":"white","border-radius":"5px"});
        $('#changePassword').css({"background-color":"white","border-radius":"5px"});
        $('#addPlayers').css({"background-color":"white","border-radius":"5px"});
        $('#changeEmail').css({"background-color":"white","border-radius":"5px"});
        $('#changePhone').css({"background-color":"white","border-radius":"5px"});

        $('#createRoundMatches').css({"display":"none"});
        $('#editRoundMatches').css({"display":"none"});
        $('#enterSGLSScoreResults').css({"display":"none"});
        $('#enterDBLSScoreResults').css({"display":"none"});
        $('#addAnnouncement').css({"display":"none"});
        $('#changePW').css({"display":"none"});
        $('#addNewPlayers').css({"display":"none"});
        $('#changePH').css({"display":"none"});
        $('#changeEM').css({"display":"none"});
        $('#logout').css({"display":"block"});

        $(".enterSGLSScores")[0].reset();
        $(".enterDBLSScores")[0].reset();
        $(".addNewPLYR")[0].reset();
        $(".updatePW")[0].reset();
        $(".updateEM")[0].reset();
        $(".addAnnounce")[0].reset();
        $(".updatePN")[0].reset();
        $(".editSGLSMatch")[0].reset();
        $(".editDBLSMatch")[0].reset();

        var logoutID = 1;

        swal({
            title: 'Are you sure you want to logout?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#53A548',
            cancelButtonColor: 'dimgrey',
            confirmButtonText: 'Logout',
            closeOnConfirm: false
        },function () {
            swal(
                'Logged Out!', '', 'success'
            );

            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    logout: logoutID
                }
            }).done(function (data) {
                //console.log("Success");
                window.location.href = "/index.php";
            });
        })
    });
    //#endregion

    //#region View Player Page
    $("form .singles-player-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                viewPlayerID: viewPlayer
            },
            success: function(data){
                //console.log("Success"),
                //console.log(data);
                window.location.href = "Player"
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
              }
        })
    });
    $("form .doubles-player-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                viewPlayerID: viewPlayer
            },
            success: function(data){
                //console.log("Success"),
                //console.log(data);
                window.location.href = "Player"
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
              }
        })
    });
    $("form .singlesMatch-player1-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        if (viewPlayer == 11){
            //do nothing
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    viewMatchPlayerID: viewPlayer
                },
                success: function(data){
                    //console.log("Success"),
                    ////console.log(data);
                    window.location.href = "Player"
                },
                error: function(xhr, status, error) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            })
        }
                
    });
    $("form .singlesMatch-player2-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        if (viewPlayer == 11){
            //do nothing
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    viewMatchPlayerID: viewPlayer
                },
                success: function(data){
                    //console.log("Success"),
                    ////console.log(data);
                    window.location.href = "Player"
                },
                error: function(xhr, status, error) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            })
        }
    });

    $("form .doublesMatch-player-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        if (viewPlayer == 11){
            //do nothing
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    viewMatchPlayerID: viewPlayer
                },
                success: function(data){
                    //console.log("Success"),
                    ////console.log(data);
                    window.location.href = "Player"
                },
                error: function(xhr, status, error) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            })
        }
    });

    $("form .admin-player-name").click(function (evt) {
        evt.preventDefault();

        var viewPlayer = $(this).val();
        console.log(viewPlayer);

        if (viewPlayer == 11){
            //do nothing
        } else {
            /* $.ajax({
                url: '',
                type: 'POST',
                data: {
                    viewMatchPlayerID: viewPlayer
                },
                success: function(data){
                    //console.log("Success"),
                    ////console.log(data);
                    window.location.href = "Player"
                },
                error: function(xhr, status, error) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            }) */
        }
                
    });

    //#endregion

    //#region Admin Tools
    $("form .create-sgls-matches").click(function (evt) {
        evt.preventDefault();

        var createSGLSMatches = $(this).val();
        console.log(createSGLSMatches);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                createSGLSID: createSGLSMatches
            }
        }).done(function (data) {
            //console.log("Success");
            //console.log(data);
            swal("Success", "Singles Matches Created", "success");
        });
    });

    $("form .create-dbls-matches").click(function (evt) {
        evt.preventDefault();

        var createDBLSMatches = $(this).val();
        console.log(createDBLSMatches);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                createDBLSID: createDBLSMatches
            }
        }).done(function (data) {
            //console.log("Success");
            //console.log(data);
            swal("Success", "Doubles Matches Created", "success");
        });
    });

    $("form #sglsMatchEditSubmit").click(function (evt) {
        evt.preventDefault();

        var editsglsMatchID = parseInt($("#editsglsMatchID").val());
        var editSGLSP1 = $("#editSGLSP1").val();
        var editSGLSP2 = $("#editSGLSP2").val();

        //#region Value Handling
        if (editSGLSP1 == ''){
            editSGLSP1 = 0;
        } else {
            editSGLSP1 = parseInt(editSGLSP1);
        }

        if (editSGLSP2 == ''){
            editSGLSP2 = 0;
        } else {
            editSGLSP2 = parseInt(editSGLSP2);
        }
        //#endregion

        console.log(editsglsMatchID+" "+editSGLSP1+" "+editSGLSP2);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                ntrEditsglsMatchID: editsglsMatchID,
                ntrEditSGLSP1: editSGLSP1,
                ntrEditSGLSP2: editSGLSP2
            }
        }).done(function (data) {
            //console.log("Success");
            //console.log(data);
            swal("Success", "Singles Match Updated", "success");
            $(".editSGLSMatch")[0].reset();
        });
    });

    $("form #dblsMatchEditSubmit").click(function (evt) {
        evt.preventDefault();

        var editdblsMatchID = parseInt($("#editdblsMatchID").val());
        var editDBLSP1 = $("#editDBLSP1").val();
        var editDBLSP2 = $("#editDBLSP2").val();
        var editDBLSP3 = $("#editDBLSP3").val();
        var editDBLSP4 = $("#editDBLSP4").val();

        //#region Value Handling
        if (editDBLSP1 == ''){
            editDBLSP1 = 0;
        } else {
            editDBLSP1 = parseInt(editDBLSP1);
        }

        if (editDBLSP2 == ''){
            editDBLSP2 = 0;
        } else {
            editDBLSP2 = parseInt(editDBLSP2);
        }

        if (editDBLSP3 == ''){
            editDBLSP3 = 0;
        } else {
            editDBLSP3 = parseInt(editDBLSP3);
        }

        if (editDBLSP4 == ''){
            editDBLSP4 = 0;
        } else {
            editDBLSP4 = parseInt(editDBLSP4);
        }
        //#endregion

        // console.log(editdblsMatchID+" "+editDBLSP1+" "+editDBLSP2+" "+editDBLSP3+" "+editDBLSP4);

        $.ajax({
            url: '',
            type: 'POST',
            data: {
                ntrEditdblsMatchID: editdblsMatchID,
                ntrEditDBLSP1: editDBLSP1,
                ntrEditDBLSP2: editDBLSP2,
                ntrEditDBLSP3: editDBLSP3,
                ntrEditDBLSP4: editDBLSP4
            }
        }).done(function (data) {
            // //console.log("Success");
            //console.log(data);
            swal("Success", "Doubles Match Updated", "success");
            $(".editDBLSMatch")[0].reset();
        });
    });

    $("form #sglsScoreSubmit").click(function (evt) {
        evt.preventDefault();
        var sglsDNP;
        var sglsWalkover;

        var sglsMatchID = parseInt($("#sglsMatchID").val());
        var sglsSet1P1 = parseInt($("#sglsSet1P1").val());
        var sglsSet2P1 = parseInt($("#sglsSet2P1").val());
        var sglsSet3P1 = $("#sglsSet3P1").val();
        var sglsSet1P2 = parseInt($("#sglsSet1P2").val());
        var sglsSet2P2 = parseInt($("#sglsSet2P2").val());
        var sglsSet3P2 = $("#sglsSet3P2").val();
        var sglsPlayoff = $("#sglsPlayoff").prop("checked");
        var sglsChallenge = $("#sglsChallenge").prop("checked");
        var sglsWinner = parseInt($('input[name=sglsWinner]:checked').val());
        
        //#region Value Handling
        if(sglsPlayoff == true){
            sglsPlayoff = 1;
        } else {
            sglsPlayoff = 0;
        };
        if(sglsChallenge == true){
            sglsChallenge = 1;
        } else {
            sglsChallenge = 0;
        };
        if(sglsSet3P1 == ''){
            sglsSet3P1 = 0;
        } else {
            sglsSet3P1 = parseInt(sglsSet3P1);
        };
        if(sglsSet3P2 == ''){
            sglsSet3P2 = 0;
        } else {
            sglsSet3P2 = parseInt(sglsSet3P2);
        };
        if( (sglsSet1P1 == 0) && (sglsSet2P1 == 0) && (sglsSet3P1 == 0) && (sglsSet1P2 == 0) && (sglsSet2P2 == 0) && (sglsSet3P2 == 0) ){
            sglsDNP = 1;
            sglsWinner = 0;
        } else {
            sglsDNP = 0;
        }
        if( (sglsSet1P1 == 1) && (sglsSet2P1 == 1) && (sglsSet3P1 == 0)  && (sglsWinner == 1) || (sglsSet1P2 == 1) && (sglsSet2P2 == 1) && (sglsSet3P2 == 0)  && (sglsWinner == 2) ){
            sglsWalkover = 1;
        } else {
            sglsWalkover = 0;
        }
        //#endregion

        // console.log(sglsMatchID," ",sglsSet1P1," ",sglsSet2P1," ",sglsSet3P1," ",sglsSet1P2," ",sglsSet2P2," ",sglsSet3P2," ",sglsPlayoff," ",sglsChallenge," ",sglsWinner);

        if ((sglsSet1P1 > 7) || isNaN(sglsSet1P1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((sglsSet2P1 > 7) || isNaN(sglsSet2P1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if (sglsSet3P1 > 7){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((sglsSet1P2 > 7) || isNaN(sglsSet2P1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((sglsSet2P2 > 7) || isNaN(sglsSet2P1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if (sglsSet3P2 > 7){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if (isNaN(sglsWinner)){
            swal("Oops...", "Please Select a Winner!", "error");
        } else {
            if(sglsDNP == 1){
                swal({
                    title: 'Match Not Played?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#53A548',
                    cancelButtonColor: 'dimgrey',
                    confirmButtonText: 'Submit',
                    closeOnConfirm: false
                },function () {                           
                    $.ajax({
                        url: '',
                        type: 'POST',
                        data: {
                            ntrSGLSMatchID: sglsMatchID,
                            ntrSGLSS1P1: sglsSet1P1,
                            ntrSGLSS2P1: sglsSet2P1,
                            ntrSGLSS3P1: sglsSet3P1,
                            ntrSGLSS1P2: sglsSet1P2,
                            ntrSGLSS2P2: sglsSet2P2,
                            ntrSGLSS3P2: sglsSet3P2,
                            ntrSGLSPlayoff: sglsPlayoff,
                            ntrSGLSChallenge: sglsChallenge,
                            ntrSGLSWinner: sglsWinner,
                            ntrsglsDNP: sglsDNP
                        }
                    }).done(function (data) {
                        //console.log("Success");
                        //console.log(data);
                        swal("Success", "Scores Entered", "success");
                        $(".enterSGLSScores")[0].reset();
                    });
                })
            } else if (sglsWalkover == 1){
                swal({
                    title: 'Walkover?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#53A548',
                    cancelButtonColor: 'dimgrey',
                    confirmButtonText: 'Submit',
                    closeOnConfirm: false
                },function () {                           
                    $.ajax({
                        url: '',
                        type: 'POST',
                        data: {
                            ntrSGLSMatchID: sglsMatchID,
                            ntrSGLSS1P1: sglsSet1P1,
                            ntrSGLSS2P1: sglsSet2P1,
                            ntrSGLSS3P1: sglsSet3P1,
                            ntrSGLSS1P2: sglsSet1P2,
                            ntrSGLSS2P2: sglsSet2P2,
                            ntrSGLSS3P2: sglsSet3P2,
                            ntrSGLSPlayoff: sglsPlayoff,
                            ntrSGLSChallenge: sglsChallenge,
                            ntrSGLSWinner: sglsWinner,
                            ntrsglsDNP: sglsDNP
                        }
                    }).done(function (data) {
                        //console.log("Success");
                        //console.log(data);
                        swal("Success", "Scores Entered", "success");
                        $(".enterSGLSScores")[0].reset();
                    });
                })
            } else {
                $.ajax({
                        url: '',
                        type: 'POST',
                        data: {
                            ntrSGLSMatchID: sglsMatchID,
                            ntrSGLSS1P1: sglsSet1P1,
                            ntrSGLSS2P1: sglsSet2P1,
                            ntrSGLSS3P1: sglsSet3P1,
                            ntrSGLSS1P2: sglsSet1P2,
                            ntrSGLSS2P2: sglsSet2P2,
                            ntrSGLSS3P2: sglsSet3P2,
                            ntrSGLSPlayoff: sglsPlayoff,
                            ntrSGLSChallenge: sglsChallenge,
                            ntrSGLSWinner: sglsWinner,
                            ntrsglsDNP: sglsDNP
                        }
                    }).done(function (data) {
                        //console.log("Success");
                        //console.log(data);
                        swal("Success", "Scores Entered", "success");
                        $(".enterSGLSScores")[0].reset();
                });
            }
            
        }
    });

    $("form #DBlsScoreSubmit").click(function (evt) {
        evt.preventDefault();
        var DBlsSet1Winner;
        var DBlsSet2Winner;
        var DBlsSet3Winner;
        var DBlsDNP;

        var DBlsMatchID = parseInt($("#DBlsMatchID").val());
        var DBlsSet1T1 = parseInt($("#DBlsSet1T1").val());
        var DBlsSet2T1 = parseInt($("#DBlsSet2T1").val());
        var DBlsSet3T1 = parseInt($("#DBlsSet3T1").val());
        var DBlsSet1T2 = parseInt($("#DBlsSet1T2").val());
        var DBlsSet2T2 = parseInt($("#DBlsSet2T2").val());
        var DBlsSet3T2 = parseInt($("#DBlsSet3T2").val());
        var DBlsPlayoff = $("#DBlsPlayoff").prop("checked");
        var DBlsChallenge = $("#DBlsChallenge").prop("checked");

        //#region Value Handling
        if(DBlsSet1T1 > DBlsSet1T2){
            DBlsSet1Winner = 1;
        } else {
            DBlsSet1Winner = 2;
        }
        if(DBlsSet2T1 > DBlsSet2T2){
            DBlsSet2Winner = 1;
        } else {
            DBlsSet2Winner = 2;
        }
        if(DBlsSet3T1 > DBlsSet3T2){
            DBlsSet3Winner = 1;
        } else {
            DBlsSet3Winner = 2;
        }
        if(DBlsPlayoff == true){
            DBlsPlayoff = 1;
        } else {
            DBlsPlayoff = 0;
        };
        if(DBlsChallenge == true){
            DBlsChallenge = 1;
        } else {
            DBlsChallenge = 0;
        };
        if( (DBlsSet1T1 == 0) && (DBlsSet2T1 == 0) && (DBlsSet3T1 == 0) && (DBlsSet1T2 == 0) && (DBlsSet2T2 == 0) && (DBlsSet3T2 == 0) ){
            DBlsDNP = 1;
            DBlsSet1Winner = 0;
            DBlsSet2Winner = 0;
            DBlsSet3Winner = 0;
        } else {
            DBlsDNP = 0;
        }
        //#endregion


        if ((DBlsSet1T1 > 7) || isNaN(DBlsSet1T1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((DBlsSet2T1 > 7) || isNaN(DBlsSet2T1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((DBlsSet3T1 > 7) || isNaN(DBlsSet3T1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((DBlsSet1T2 > 7) || isNaN(DBlsSet2T1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((DBlsSet2T2 > 7) || isNaN(DBlsSet2T1)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else if ((DBlsSet3T2 > 7) || isNaN(DBlsSet3T2)){
            swal("Oops...", "Score Entered is Invalid!", "error");
        } else {
            // console.log(DBlsMatchID," ",DBlsSet1T1," ",DBlsSet2T1," ",DBlsSet3T1," ",DBlsSet1T2," ",DBlsSet2T2," ",DBlsSet3T2," ",DBlsPlayoff," ",DBlsChallenge," ",DBlsSet1Winner," ",DBlsSet2Winner," ",DBlsSet3Winner," ",DBlsDNP);

            if(DBlsDNP == 1){
                swal({
                    title: 'Match Not Played?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#53A548',
                    cancelButtonColor: 'dimgrey',
                    confirmButtonText: 'Submit',
                    closeOnConfirm: false
                },function () {                           
                    $.ajax({
                        url: '',
                        type: 'POST',
                        data: {
                            ntrDBLSMatchID: DBlsMatchID,
                            ntrDBLSS1T1: DBlsSet1T1,
                            ntrDBLSS2T1: DBlsSet2T1,
                            ntrDBLSS3T1: DBlsSet3T1,
                            ntrDBLSS1T2: DBlsSet1T2,
                            ntrDBLSS2T2: DBlsSet2T2,
                            ntrDBLSS3T2: DBlsSet3T2,
                            ntrDBLSPlayoff: DBlsPlayoff,
                            ntrDBLSChallenge: DBlsChallenge,
                            ntrDBLSSet1Winner: DBlsSet1Winner,
                            ntrDBLSSet2Winner: DBlsSet2Winner,
                            ntrDBLSSet3Winner: DBlsSet3Winner,
                            ntrDBlsDNP: DBlsDNP
                        }
                    }).done(function (data) {
                        //console.log("Success");
                        //console.log(data);
                        swal("Success", "Scores Entered", "success");
                        $(".enterDBLSScores")[0].reset();
                    });
                })
            } else {
                $.ajax({
                    url: '',
                    type: 'POST',
                    data: {
                        ntrDBLSMatchID: DBlsMatchID,
                        ntrDBLSS1T1: DBlsSet1T1,
                        ntrDBLSS2T1: DBlsSet2T1,
                        ntrDBLSS3T1: DBlsSet3T1,
                        ntrDBLSS1T2: DBlsSet1T2,
                        ntrDBLSS2T2: DBlsSet2T2,
                        ntrDBLSS3T2: DBlsSet3T2,
                        ntrDBLSPlayoff: DBlsPlayoff,
                        ntrDBLSChallenge: DBlsChallenge,
                        ntrDBLSSet1Winner: DBlsSet1Winner,
                        ntrDBLSSet2Winner: DBlsSet2Winner,
                        ntrDBLSSet3Winner: DBlsSet3Winner,
                        ntrDBlsDNP: DBlsDNP
                    }
                }).done(function (data) {
                    //console.log("Success");
                    //console.log(data);
                    swal("Success", "Scores Entered", "success");
                    $(".enterDBLSScores")[0].reset();
                });
            }
            
        }
    });

    $("form #newPlayerSubmit").click(function (evt){
        evt.preventDefault();

        var newFName = $("#newFName").val();
        var newLName = $("#newLName").val();
        var newEmail = $("#newEmail").val();
        var newPhone = parseInt($("#newPhone").val());
        var newPassword = $("#newPassword").val();
        var newSGLSPoints = $("#newSGLSPoints").val();
        var newDBLSPoints = $("#newDBLSPoints").val();
        var newSGLSPlayer = $("#newSGLSPlayer").prop("checked");
        var newDBLSPlayer = $("#newDBLSPlayer").prop("checked");

        //#region Value Handling
        if(newSGLSPlayer == true){
            newSGLSPlayer = 1;
        } else {
            newSGLSPlayer = 0;
        };
        if(newDBLSPlayer == true){
            newDBLSPlayer = 1;
        } else {
            newDBLSPlayer = 0;
        };
        if(newSGLSPoints == ''){
            newSGLSPoints = 0;
        } else {
            newSGLSPoints = parseInt(newSGLSPoints);
        };
        if(newDBLSPoints == ''){
            newDBLSPoints = 0;
        } else {
            newDBLSPoints = parseInt(newDBLSPoints);
        };
        //#endregion

        //console.log(newFName," ",newLName," ",newEmail," ",newPhone," ",newSGLSPoints," ",newDBLSPoints," ",newSGLSPlayer," ",newDBLSPlayer);

        if ((newPhone.toString().length) != 10){
            swal("Oops...", "Please Enter a Valid Phone Number! (Must be 10 digits)", "error");
        } else if ((newSGLSPlayer == 1) && (newSGLSPoints == 0)){
            swal("Oops...", "Please Enter Starting Singles Points", "error");
        } else if ((newDBLSPlayer == 1) && (newDBLSPoints == 0)){
            swal("Oops...", "Please Enter Starting Doubles Points", "error");
        } else if ((newFName == '') || (newLName == '')){
            swal("Oops...", "Please Enter Player's Full Name", "error");
        } else if (newEmail == ''){
            swal("Oops...", "Please Enter Player's Email", "error");
        } else if ((newPassword == '') || (newPassword.length < 8)){
            swal("Oops...", "Please Enter a Valid Password (Must be at least 8 characters)", "error");
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    ntrNewFName: newFName,
                    ntrNewLName: newLName,
                    ntrNewEmail: newEmail,
                    ntrNewPhone: newPhone,
                    ntrNewPassword: newPassword,
                    ntrNewSGLSPoints: newSGLSPoints,
                    ntrNewDBLSPoints: newDBLSPoints,
                    ntrNewSGLSPlayer: newSGLSPlayer,
                    ntrNewDBLSPlayer: newDBLSPlayer
                }
            }).done(function (data) {
                //console.log("Success");
                //console.log(data);
                swal("Success", "Player Entered", "success");
                $(".addNewPLYR")[0].reset();
            });

            //console.log(newFName," ",newLName," ",newEmail," ",newPhone," ",newSGLSPoints," ",newDBLSPoints," ",newSGLSPlayer," ",newDBLSPlayer);

        } 

    });

    $("form #newPasswordSubmit").click(function (evt){
        evt.preventDefault();

        var userNewPWID = $("#userNewPWID").val();
        var newUserPW = $("#userNewPW").val();

        if ((newUserPW == '') || (newUserPW.length < 8)){
            swal("Oops...", "Please Enter a Valid Password (Must be at least 8 characters)", "error");
        } else {

            swal({
                title: 'Are you sure?',
                text: "",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#53A548',
                cancelButtonColor: 'dimgrey',
                confirmButtonText: 'Logout',
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            },function () {
                $.ajax({
                    url: '',
                    type: 'POST',
                    data: {
                        ntrUserNewPWID: userNewPWID,
                        ntrNewUserPW: newUserPW
                    }
                }).done(function (data) {
                    //console.log("Success");
                    //console.log(data);
                    swal("Success", "Password Updated", "success");
                    $(".updatePW")[0].reset();
                });
            })

        }

    });

    $("form #newEmailSubmit").click(function (evt){
        evt.preventDefault();

        var userNewEMID = $("#userNewEMID").val();
        var newUserEM = $("#userNewEM").val();

        if (!validateEmail(newUserEM)){
            swal("Oops...", "Please Enter a Valid Email", "error");
        } else {

            swal({
                title: 'Are you sure?',
                text: "",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#53A548',
                cancelButtonColor: 'dimgrey',
                confirmButtonText: 'Logout',
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            },function () {
                $.ajax({
                    url: '',
                    type: 'POST',
                    data: {
                        ntrUserNewEMID: userNewEMID,
                        ntrNewUserEM: newUserEM
                    }
                }).done(function (data) {
                    //console.log("Success");
                    //console.log(data);
                    swal("Success", "Email Updated", "success");
                    $(".updateEM")[0].reset();
                });
            })

            

        }

    });

    $("form #newPhoneSubmit").click(function (evt){
        evt.preventDefault();

        var userNewPNID = $("#userNewPNID").val();
        var newUserPN = $("#userNewPN").val();

        if ((newUserPN == '') || ((newUserPN.toString().length) != 10)){
            swal("Oops...", "Please Enter a Valid Phone Number (Must be 10 digits)", "error");
        } else {

            swal({
                title: 'Are you sure?',
                text: "",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#53A548',
                cancelButtonColor: 'dimgrey',
                confirmButtonText: 'Logout',
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            },function () {
                $.ajax({
                    url: '',
                    type: 'POST',
                    data: {
                        ntrUserNewPNID: userNewPNID,
                        ntrNewUserPN: newUserPN
                    }
                }).done(function (data) {
                    //console.log("Success");
                    //console.log(data);
                    swal("Success", "Phone Number Updated", "success");
                    $(".updatePN")[0].reset();
                });
            }) 

        }

    });

    $("form #newAnnounceSubmit").click(function (evt){
        evt.preventDefault();

        var newAnnounceTitle = $("#announceTitle").val();
        var newAnnounceDesc = $("#announceDesc").val();
        var newAnnounceDate = $("#announceDate").val();
        var newAnnounceLink = $("#announceLink").val();

        if (newAnnounceTitle == ''){
            swal("Oops...", "Please Enter a Title", "error");
        } else {
            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    ntrAnnounceTitle: newAnnounceTitle,
                    ntrAnnounceDesc: newAnnounceDesc,
                    ntrAnnounceDate: newAnnounceDate,
                    ntrAnnounceLink: newAnnounceLink
                }
            }).done(function (data) {
                //console.log("Success");
                //console.log(data);
                swal("Success", "Announcement Entered", "success");
                $(".addAnnounce")[0].reset();
            });

            // console.log(newAnnounceTitle, newAnnounceDesc, newAnnounceDate, newAnnounceLink)
            // $(".addAnnounce")[0].reset();

        }

    });

    //#endregion
}

$(document).ready(function () {

    setBindings();
    
});