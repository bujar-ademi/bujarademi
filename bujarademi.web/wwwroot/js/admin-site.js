var config = window.config = {},
    $ref = $("#ref");

function animate(e) {
    var o = "animated " + e.name;
    $(e.selector).addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(this).removeClass(o);
    });
}
config.ResponsiveBootstrapToolkitVisibilityDivs = {
    xs: $('<div class="device-xs \t\t\t\t  hidden-sm-up"></div>'),
    sm: $('<div class="device-sm hidden-xs-down hidden-md-up"></div>'),
    md: $('<div class="device-md hidden-sm-down hidden-lg-up"></div>'),
    lg: $('<div class="device-lg hidden-md-down hidden-xl-up"></div>'),
    xl: $('<div class="device-xl hidden-lg-down\t\t\t  "></div>')
}, ResponsiveBootstrapToolkit.use("Custom", config.ResponsiveBootstrapToolkitVisibilityDivs), config.validations = {
    debug: !0,
    errorClass: "has-error",
    validClass: "success",
    errorElement: "span",
    highlight: function (e, o, t) {
        $(e).parents("div.form-group").addClass(o).removeClass(t);
    },
    unhighlight: function (e, o, t) {
        $(e).parents(".has-error").removeClass(o).addClass(t);
    },
    submitHandler: function (e) {
        e.submit();
    }
}, config.delayTime = 50, config.chart = {}, config.chart.colorPrimary = tinycolor($ref.find(".chart .color-primary").css("color")), config.chart.colorSecondary = tinycolor($ref.find(".chart .color-secondary").css("color")), $(function () {
    var t = $(".item-actions-dropdown");
    $(document).on("click", function (e) {
        $(e.target).closest(".item-actions-dropdown").length || t.removeClass("active");
    }), $(".item-actions-toggle-btn").on("click", function (e) {
        e.preventDefault();
        var o = $(this).closest(".item-actions-dropdown");
        t.not(o).removeClass("active"), o.toggleClass("active");
    });
});
var npSettings = {
    easing: "ease",
    speed: 500
};

function setSameHeights(e) {
    e = e || $(".sameheight-container");
    var t = ResponsiveBootstrapToolkit.current();
    e.each(function () {
        var e = $(this).find(".sameheight-item"),
            o = 0;
        e.each(function () {
            $(this).css({
                height: "auto"
            }), o = Math.max(o, $(this).innerHeight())
        }), e.each(function () {
            -1 === ($(this).data("exclude") || "").split(",").indexOf(t) && $(this).innerHeight(o);
        });
    });
}
NProgress.configure(npSettings), $(function () {
    var e;
    setSameHeights(), $(window).resize(function () {
        clearTimeout(e), e = setTimeout(setSameHeights, 150);
    });
}), $(function () {
    animate({
        name: "flipInY",
        selector: ".error-card > .error-title-block"
    }), setTimeout(function () {
        var e = $(".error-card > .error-container");
        animate({
            name: "fadeInUp",
            selector: e
        }), e.addClass("visible");
    }, 1e3);
}), $(function () {
    if (!$("#login-form").length) return !1;
    var e = {
        rules: {
            username: {
                required: !0,
                email: !0
            },
            password: "required",
            agree: "required"
        },
        messages: {
            username: {
                required: "Please enter username",
                email: "Please enter a valid email address"
            },
            password: "Please enter password"
        },
        invalidHandler: function () {
            animate({
                name: "shake",
                selector: ".auth-container > .card"
            });
        }
    };
    $.extend(e, config.validations), $("#login-form").validate(e);
}), $(function () {
    if (!$("#reset-form").length) return !1;
    var e = {
        rules: {
            email1: {
                required: !0,
                email: !0
            }
        },
        messages: {
            email1: {
                required: "Please enter email address",
                email: "Please enter a valid email address"
            }
        },
        invalidHandler: function () {
            animate({
                name: "shake",
                selector: ".auth-container > .card"
            });
        }
    };
    $.extend(e, config.validations), $("#reset-form").validate(e);
}), $(function () {
    if (!$("#signup-form").length) return !1;
    var e = {
        rules: {
            firstname: {
                required: !0
            },
            lastname: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: 8
            },
            retype_password: {
                required: !0,
                minlength: 8,
                equalTo: "#password"
            },
            agree: {
                required: !0
            }
        },
        groups: {
            name: "firstname lastname",
            pass: "password retype_password"
        },
        errorPlacement: function (e, o) {
            "firstname" === o.attr("name") || "lastname" === o.attr("name") ? (e.insertAfter($("#lastname").closest(".row")), o.parents("div.form-group").addClass("has-error")) : "password" === o.attr("name") || "retype_password" === o.attr("name") ? (e.insertAfter($("#retype_password").closest(".row")), o.parents("div.form-group").addClass("has-error")) : "agree" === o.attr("name") ? e.insertAfter("#agree-text") : e.insertAfter(o);
        },
        messages: {
            firstname: "Please enter firstname and lastname",
            lastname: "Please enter firstname and lastname",
            email: {
                required: "Please enter email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter password fields.",
                minlength: "Passwords should be at least 8 characters."
            },
            retype_password: {
                required: "Please enter password fields.",
                minlength: "Passwords should be at least 8 characters."
            },
            agree: "Please accept our policy"
        },
        invalidHandler: function () {
            animate({
                name: "shake",
                selector: ".auth-container > .card"
            });
        }
    };
    $.extend(e, config.validations), $("#signup-form").validate(e);
}), $(function () {
    $(".wyswyg").each(function () {
        var e = $(this).find(".editor"),
            o = $(this).find(".toolbar");
        new Quill(e.get(0), {
            theme: "snow",
            modules: {
                toolbar: o.get(0)
            }
        });
    });
}),
    $(function () {
        if ($("#sidebar-menu, #customize-menu").metisMenu({
            activeClass: "open"
        }), $("#sidebar-collapse-btn").on("click", function (e) {
            e.preventDefault(), $("#app").toggleClass("sidebar-open");
        }), $("#sidebar-overlay").on("click", function () {
            $("#app").removeClass("sidebar-open");
        }), $.browser.mobile) {
            var e = $("#app ");
            $("#sidebar-mobile-menu-handle ").swipe({
                swipeLeft: function () {
                    e.hasClass("sidebar-open") && e.removeClass("sidebar-open");
                },
                swipeRight: function () {
                    e.hasClass("sidebar-open") || e.addClass("sidebar-open");
                },
                triggerOnTouchEnd: !1
            });
        }
    }),
    $(function () {
        if (!$(".form-control").length) return !1;
        $(".form-control").focus(function () {
            $(this).siblings(".input-group-addon").addClass("focus");
        }), $(".form-control").blur(function () {
            $(this).siblings(".input-group-addon").removeClass("focus");
        });
    });
var modalMedia = {
    $el: $("#modal-media"),
    result: {},
    options: {},
    open: function (e) {
        e = e || {}, this.options = e, this.$el.modal("show");
    },
    close: function () {
        $.isFunction(this.options.beforeClose) && this.options.beforeClose(this.result), this.$el.modal("hide"), $.isFunction(this.options.afterClose) && this.options.beforeClose(this.result);
    }
};
$(function () {
    $("body").addClass("loaded");

    $('.trumbowyg').trumbowyg({
        resetCss: true,
        autogrow: true,
        btnsDef: {
            // Create a new dropdown
            image: {
                dropdown: ['insertImage', 'upload'],
                ico: 'insertImage'
            }
        },
        // Redefine the button pane
        btns: [
            ['viewHTML'],
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['image'], // Our fresh created dropdown
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
        ],
        plugins: {
            // Add imagur parameters to upload plugin for demo purposes
            upload: {
                serverPath: '/Admin/Profile?handler=UploadMedia',
                fileFieldName: 'image',
                urlPropertyName: 'data.link',
                headers: {
                    "RequestVerificationToken": $('input[name="__RequestVerificationToken"]').val()
                }
            }
        }
    });

}), NProgress.start(), NProgress.done();

function doLogout() {
    if (sessionStorage) {
        sessionStorage.clear();
    }
    document.getElementById('logoutForm').submit();
}