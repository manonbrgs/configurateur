$(document).ready(function(){

    // Navigation

    $("#start").click(function() {
        $("#form-start").hide();
        $("#form-statut").css("display", "flex");
    });

    $("#form-statut input").click(function() {
        $("#form-statut").hide();
        if (this.id == "independant") {
            $("#form-independant").css("display", "flex");
        } else if (this.id == "societe") {
            $("#form-societe").css("display", "flex");
            $("#form-societe > .form-title").html("Offres pour votre <span class=\'orange-text\'>société</span>");
            $(".multi-societes").hide();
        } else if (this.id ==  "societes") {
            $("#form-societe").css("display", "flex");
            $("#form-societe > .form-title").html("Offres pour vos <span class=\'orange-text\'>sociétés</span>");
            $(".multi-societes").show();
        }
    });

    var result_independant = "";

    $("#form-independant input").click(function() {
        $("#form-independant").hide();
        if (this.id == "sous-traitance") {
            $(".result-sous-traitance").css("display", "flex");
            result_independant = "sous-traitance";
        } else if (this.id == "sous-traitance-vente-formations") {
            $(".result-sous-traitance-vente-formations").css("display", "flex"); 
            result_independant = "sous-traitance-vente-formations";
        }
    });

    $(".result-inde .result-btns input").click(function() {
        $(this).parent().parent().hide();
        $(".essai-gratuit").css("display", "flex");
    });

    $(".result-societe .result-btns input").click(function() {
        $(this).parent().parent().hide();
        $(".essai-gratuit-societe").css("display", "flex");
    });

    $("#form-societe input").click(function() {
        $("#form-societe").hide();
        if (this.id == "nbr-utilisateurs") {
            $(".choice-nbr-utilisateurs").css("display", "flex");
        } else if (this.id == "nbr-formateurs") {
            $(".choice-nbr-formateurs").css("display", "flex"); 
        } else if (this.id == "nbr-stagiaires") {
            $(".choice-nbr-stagiaires").css("display", "flex"); 
        } else if (this.id == "options-customisation") {
            $(".choice-options-customisation").css("display", "flex"); 
        }
    });

    var validation_utilisateurs = false;
    var validation_formateurs = false;
    var validation_stagiaires = false;

    $(".choice-nbr-utilisateurs #nbr-utilisateurs-validation").click(function() {
        var nombre_utilisateurs;

        if (!$("#input-nbr-utilisateurs").val()) {
            //Choix non validé
        } else {
            nombre_utilisateurs = $("#input-nbr-utilisateurs").val() + " utilisateur(s)";
            $("#nbr-utilisateurs").val("Modifier");
            validation_utilisateurs = true;
            $("#nombre-utilisateurs").css("height", "unset");
            $("#nombre-utilisateurs").css("visibility", "visible");
        } 

        $("#nombre-utilisateurs").html(nombre_utilisateurs);
        $(".choice-nbr-utilisateurs").hide();
        $("#form-societe").css("display", "flex");

        if ((validation_utilisateurs == true) && (validation_formateurs == true) && (validation_stagiaires == true)) {
            $("#societe-validation").prop("disabled", false);
        }
    });

    var nombre_formateurs;

    $(".choice-nbr-formateurs input").click(function() {
        $(".choice-nbr-formateurs").hide();
        if (this.id == "0-5-formateurs") {
            nombre_formateurs = "0 à 5 formateurs";
            $("#nbr-formateurs").val("Modifier");
            validation_formateurs = true;
            $("#nombre-formateurs").css("height", "unset");
            $("#nombre-formateurs").css("visibility", "visible");
        } else if (this.id == "5-30-formateurs") {
            nombre_formateurs = "5 à 30 formateurs";
            $("#nbr-formateurs").val("Modifier");
            validation_formateurs = true;
            $("#nombre-formateurs").css("height", "unset");
            $("#nombre-formateurs").css("visibility", "visible");
        } else if (this.id == "30-plus-formateurs") {
            nombre_formateurs = "30 formateurs et plus";
            $("#nbr-formateurs").val("Modifier");
            validation_formateurs = true;
            $("#nombre-formateurs").css("height", "unset");
            $("#nombre-formateurs").css("visibility", "visible");
        }
        $("#nombre-formateurs").html(nombre_formateurs);
        $("#form-societe").css("display", "flex");

        if ((validation_utilisateurs == true) && (validation_formateurs == true) && (validation_stagiaires == true)) {
            $("#societe-validation").prop("disabled", false);
        }
    });

    var nombre_stagiaires;

    $(".choice-nbr-stagiaires input").click(function() {
        $(".choice-nbr-stagiaires").hide();
        if (this.id == "1-600") {
            nombre_stagiaires = "1 à 600 par an";
            $("#nbr-stagiaires").val("Modifier");
            validation_stagiaires = true;
            $("#nombre-stagiaires").css("height", "unset");
            $("#nombre-stagiaires").css("visibility", "visible");
        } else if (this.id == "600-900") {
            nombre_stagiaires = "600 à 900 par an";
            $("#nbr-stagiaires").val("Modifier");
            validation_stagiaires = true;
            $("#nombre-stagiaires").css("height", "unset");
            $("#nombre-stagiaires").css("visibility", "visible");
        } else if (this.id == "900-1000") {
            nombre_stagiaires = "900 à 1000 par an";
            $("#nbr-stagiaires").val("Modifier");
            validation_stagiaires = true;
            $("#nombre-stagiaires").css("height", "unset");
            $("#nombre-stagiaires").css("visibility", "visible");
        } else if (this.id == "1000-plus") {
            nombre_stagiaires = "1000 et plus par an";
            $("#nbr-stagiaires").val("Modifier");
            validation_stagiaires = true;
            $("#nombre-stagiaires").css("height", "unset");
            $("#nombre-stagiaires").css("visibility", "visible");
        }
        $("#nombre-stagiaires").html(nombre_stagiaires);
        $("#form-societe").css("display", "flex");

        if ((validation_utilisateurs == true) && (validation_formateurs == true) && (validation_stagiaires == true)) {
            $("#societe-validation").prop("disabled", false);
        }
    });

    var option = [];

    $(".choice-options-customisation .form-container input").on("change", function() {
        if ($("#aucune-option").is(":checked")) {
            option = ["Aucune option"];
            $("#sms").prop("checked", false);
            $("#signature-elec").prop("checked", false);
            $("#signature-num").prop("checked", false);
            $("#api").prop("checked", false);
            $("#extranet").prop("checked", false);
            $("#catalogue").prop("checked", false);
            $("#multi").prop("checked", false);
            $("#options-customisation").val("Modifier");
        }
    });

    $(".choice-options-customisation > input").click(function() {
        $(".choice-options-customisation").hide();
        if ($("#sms").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("SMS");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "SMS");
            $("#options-customisation").val("Modifier");
        }
        if ($("#signature-elec").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Signature électronique");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Signature électronique");
            $("#options-customisation").val("Modifier");
        }
        if ($("#signature-num").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Signature numérique");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Signature numérique");
            $("#options-customisation").val("Modifier");
        }
        if ($("#api").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Connecteur API");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Connecteur API");
            $("#options-customisation").val("Modifier");
        }
        if ($("#extranet").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Extranet personnalisé");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Extranet personnalisé");
            $("#options-customisation").val("Modifier");
        }
        if ($("#catalogue").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Catalogue");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Catalogue");
            $("#options-customisation").val("Modifier");
        }
        if ($("#multi").is(":checked")) {
            option = option.filter(item => item !== "Aucune option");
            option.push("Multi-sociétés");
            $("#options-customisation").val("Modifier");
        } else {
            option = option.filter(item => item !== "Aucune option");
            option = option.filter(item => item !== "Multi-sociétés");
            $("#options-customisation").val("Modifier");
        }
        if (!($("#sms").is(":checked")) &&
            !($("#signature-num").is(":checked")) &&
            !($("#signature-elec").is(":checked")) &&
            !($("#api").is(":checked")) &&
            !($("#extranet").is(":checked")) &&
            !($("#multi").is(":checked")) &&
            !($("#catalogue").is(":checked"))) {
            option = ["Aucune option"];
            $("#options-customisation").val("Modifier");
        }

        var option_remove_duplicates = option.filter(function(element,index,self){
            return index === self.indexOf(element); 
        });

        $("#option-customisation").html(option_remove_duplicates.join(" / "));
        $("#form-societe").css("display", "flex");
        $("#option-customisation").css("height", "unset");
        $("#option-customisation").css("visibility", "visible");

        if ((validation_utilisateurs == true) && (validation_formateurs == true) && (validation_stagiaires == true)) {
            $("#societe-validation").prop("disabled", false);
        }
    });
    
    // Calcul formules société

    $("#societe-validation").click(function() {
        $("#form-societe").hide();
        $(".result-societe").css("display", "flex");

        if ((nombre_formateurs == "30 formateurs et plus") ||
            ($("#input-nbr-utilisateurs").val() > 22 && $("#multi").is(":checked"))) {
                $(".formule-result").html("All inclusive");
                $(".price").html("999");
                $("#detail-formule").attr("href", "/offre-all-inclusive/");
        } else if ((nombre_stagiaires == "1000 et plus par an" && $("#signature-elec").is(":checked")) ||
            ($("#input-nbr-utilisateurs").val() > 12)  ||
            ($("#input-nbr-utilisateurs").val() < 4 && nombre_stagiaires != "1 à 600 par an" && $("#sms").is(":checked") && $("#signature-num").is(":checked") && $("#signature-elec").is(":checked") && $("#api").is(":checked") && $("#extranet").is(":checked") && $("#catalogue").is(":checked") && $("#multi").is(":checked")) ||
            ($("#input-nbr-utilisateurs").val() < 4 && nombre_stagiaires != "1 à 600 par an" && $("#sms").is(":checked") && $("#signature-num").is(":checked") && $("#signature-elec").is(":checked") && $("#api").is(":checked") && $("#extranet").is(":checked") && $("#catalogue").is(":checked") && $("#multi").is(":hidden")) ||
            ($("#input-nbr-utilisateurs").val() < 4 && nombre_stagiaires != "1 à 600 par an" && nombre_stagiaires != "600 à 900 par an" && $("#sms").is(":checked") && $("#signature-num").is(":checked") && $("#signature-elec").is(":checked") && $("#api").is(":checked") && $("#extranet").is(":checked") && $("#multi").is(":checked") && !$("#catalogue").is(":checked")) ||
            ($("#input-nbr-utilisateurs").val() < 4 && nombre_stagiaires != "1 à 600 par an" && nombre_stagiaires != "600 à 900 par an" && $("#sms").is(":checked") && $("#signature-num").is(":checked") && $("#signature-elec").is(":checked") && $("#api").is(":checked") && $("#extranet").is(":checked") && $("#multi").is(":hidden") && !$("#catalogue").is(":checked")) ||
            ($("#input-nbr-utilisateurs").val() > 4 && nombre_stagiaires != "1 à 600 par an" && $("#signature-elec").is(":checked") && $("#catalogue").is(":checked")) ||
            ($("#input-nbr-utilisateurs").val() > 5 && $("#input-nbr-utilisateurs").val() < 10 && nombre_formateurs == "30 formateurs et plus") ||
            ($("#input-nbr-utilisateurs").val() == 9 && nombre_stagiaires != "1 à 600 par an" && nombre_stagiaires != "1000 et plus par an" && $("#signature-elec").is(":checked"))) {
                $(".formule-result").html("PACK");
                $(".price").html("339");
                $("#detail-formule").attr("href", "/offre-pack/");
        } else {
            $(".formule-result").html("Organisme de formation");
            $(".price").html("129");
            $("#detail-formule").attr("href", "/offre-organisme-de-formations/");
        }
    });


    //Boutons retour

    $(".previous").click(function() {
        $(this).parent().parent().hide();
        $("input:radio").prop("checked", false);
    });

    $(".back-to-start").click(function() {
        $("#form-start").show();
    });

    $(".back-to-statut").click(function() {
        $("#form-statut").show();
    });

    $(".back-to-independant").click(function() {
        $("#form-independant").show();
    });

    $(".back-to-result").click(function() {
        if (result_independant == "sous-traitance") {
            $(".result-sous-traitance").show();
        } else if (result_independant == "sous-traitance-vente-formations") {
            $(".result-sous-traitance-vente-formations").show();
        }
    });

    $(".back-to-result-societe").click(function() {
        $(".result-societe").show();
    });

    $(".back-to-societe").click(function() {
        $("#form-societe").show();
    });

    //Disable enter key for form

    $(document).keypress(function(e) {
        if (e.which == "13" && e.target.id == "input-nbr-utilisateurs") {
            e.preventDefault();
        }
    });

})