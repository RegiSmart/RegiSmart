# RegiSmart

## Abstract


The system design described in this document focuses on the development of an efficient and user- friendly study schedule generation and subject registration system. The purpose of this system is to assist students in planning their academic schedules and managing subject registration in an organized manner. The system incorporates intelligent algorithms and user-friendly interfaces to provide personalized study schedules and streamline the subject registration process for students.
The system begins by collecting relevant information from the user, including their academic program, course requirements, and personal preferences. This information is the basis for generating a study schedule that optimizes factors such as subject prerequisites, course availability, and the student's preferred study times. The intelligent algorithm considers various constraints, such as class timings, workload distribution, and potential conflicts, to generate an optimized study schedule.
The study schedule is presented to users through a user-friendly interface, allowing them to visualize their daily, weekly, and monthly study plans. The interface provides features such as drag-and-drop functionality, allowing students to easily modify their schedules based on their preferences, availability, or unforeseen circumstances.
In addition to generating study schedules, the system also integrates subject registration functionality. Students can access the system to browse available subjects, view detailed course information, and register for their desired subjects within specified timeframes. The system utilizes real-time data from the academic institution's course catalog and registration system to ensure accurate and up-to-date information.
The system design incorporates security measures to protect personal information and ensure data integrity. User authentication and authorization mechanisms are implemented to safeguard sensitive student data and prevent unauthorized access.
Overall, the system design presented in this document aims to provide students with a comprehensive tool for planning their study schedules and registering for subjects in a streamlined and efficient manner. By leveraging intelligent algorithms and user-friendly interfaces, the system aims to enhance the academic experience and improve student success rates.



### HTML source code :
```

<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/logo.png"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><link rel="apple-touch-icon" href="/logo.png"/><link rel="manifest" href="/manifest.json"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/><link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"><title>RegiSmart | Your Online Course Registration</title><script defer="defer" src="/static/js/main.73e91fd4.js"></script><link href="/static/css/main.a4d2bcb6.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>
```
### CSS source code Admin login page :
```
.login-admin{
    background-color: #eff0f4;
    position: relative;
    inset: 0;
    width: 100%;
    height: 100vh;
}


.login-admin .login-content{
    width: 47%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 600px;
    border-radius: 10px;
    padding: 25px;
    border: 1px solid #0000001f;
}


.login-admin .login-content .err-msg h2{
    font-size: 16px;
    font-weight: 400;
}



.login-admin .login-content .logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-admin .login-content .logo img{
    width: 200px ;
    height: 65px;
    object-fit: contain;
}


.login-admin .login-content .logo div{
    
}

.login-admin .login-content .logo div h1{
    font-size: 20px;
    font-weight: 400;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    font-weight: 500;
}

.login-admin .login-content .logo div h1 i{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background-color: #dc5dd0;
    color: #fff;
    border-radius: 50%;
    padding: 8px;
    font-size: 13px;
}


.login-admin .login-content .logo div h2{
    text-align: center;
    font-size: 17px;
    color: #9c9c9c;
    font-weight: 400;
}


.login-admin .login-content .login-form{
    margin-top: 30px;
}

.login-admin .login-content .login-form form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
}


.login-admin .login-content .login-form form .input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
    position: relative;
}

.login-admin .login-content .login-form form .input label{
    font-size: 14px;
    color: #000;
    font-weight: 400;
}

.login-admin .login-content .login-form form .input input{
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none;
    width: 100%;
    border: 1px solid #aeaeae;
    font-size: 16px;
    color: #000;
    padding-left: 15px;
    padding-right: 30px;
}

.login-admin .login-content .login-form form .input button{
    position: absolute;
    top: 53px;
    right: 15px;
    transform: translateY(-50%);
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
}



.login-admin .login-content .login-form form>button{
    width: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    height: 50px;
    margin-top: 10px;
    background-color: #5fbb4f;
    color: #fff;
    font-size: 15px;
    transition: 0.5s;
}

.login-admin .login-content .login-form form>button:hover{
    background-color: #418735;
}

.login-admin .login-content .login-form form>a{
    font-size: 15px;
    font-weight: 400;
    color: #000;
    margin-top: 26px;
}


.login-admin .login-content .err-msg {
    background-color: #ff00001f;
    color: #de0000;
    padding: 15px;
    border-radius: 6px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 19px;
    border: 1px solid #de0000;
    transition: 0.5s;
}

.login-admin .login-content .err-msg.active{
    display: block;
}

@media(max-width:950px){
    .login-admin .login-content {
        width: 99%;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-height: 600px;
        border-radius: 10px;
        padding: 25px;
        border: 1px solid #0000001f;
    }

}
```



### CSS source code :
```
@charset "UTF-8";@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}body{height:100vh}*,body{scroll-behavior:smooth}*{font-family:Rubik,sans-serif;margin:0;padding:0}a{text-decoration:none!important}ul{list-style:none!important;margin:0!important}.hide{display:none!important}.lang a{color:#fff;font-size:21px;left:15px;position:absolute;top:34px;z-index:5}.page-header{min-height:451px;position:relative}.page-header .overlay{background-color:#00000087;z-index:1}.page-header .overlay,.page-header img{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}.page-header img{object-fit:cover}.page-header .page-header-content{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:400px;padding-top:135px;position:relative;z-index:2}.page-header .page-header-content .text h1{color:#fff;direction:rtl;font-size:57px;font-weight:900;margin-bottom:60px}.page-header .page-header-content .text .links{align-items:center;display:flex;flex-direction:row;gap:15px;justify-content:center}.page-header .page-header-content .text .links a{color:#fff;font-size:18px}.page-header .page-header-content .text .links i{color:#fff;font-size:19px}@media(max-width:950px){section{overflow-x:hidden}.service-text-section .header h1{font-size:25px!important}.page-header .page-header-content .text h1{color:#fff;direction:rtl;font-size:38px;font-weight:900;margin-bottom:60px;text-align:center}}/*!
 * Bootstrap  v5.3.0 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33,37,41,.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33,37,41,.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0,0,0,.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(0,0,0,.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(0,0,0,.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0,0,0,.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0,0,0,.075);--bs-focus-ring-width:0.25rem;--bs-focus-ring-opacity:0.25;--bs-focus-ring-color:rgba(13,110,253,.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{--bs-body-color:#adb5bd;--bs-body-color-rgb:173,181,189;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(173,181,189,.75);--bs-secondary-color-rgb:173,181,189;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(173,181,189,.5);--bs-tertiary-color-rgb:173,181,189;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:inherit;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-border-color:#495057;--bs-border-color-translucent:hsla(0,0%,100%,.15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f;color-scheme:dark}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:#fff;background-color:var(--bs-body-bg);color:#212529;color:var(--bs-body-color);font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-family:var(--bs-body-font-family);font-size:1rem;font-size:var(--bs-body-font-size);font-weight:400;font-weight:var(--bs-body-font-weight);line-height:1.5;line-height:var(--bs-body-line-height);margin:0;text-align:var(--bs-body-text-align)}hr{border:0;border-top:1px solid;border-top:var(--bs-border-width) solid;color:inherit;margin:1rem 0;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color:inherit;color:var(--bs-heading-color);font-weight:500;line-height:1.2;margin-bottom:.5rem;margin-top:0}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-bottom:1rem;margin-top:0}abbr[title]{cursor:help;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-bottom:1rem;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{background-color:#fff3cd;background-color:var(--bs-highlight-bg);padding:.1875em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:#d63384;color:var(--bs-code-color);font-size:.875em}a>code{color:inherit}kbd{background-color:#212529;background-color:var(--bs-body-color);border-radius:.25rem;color:#fff;color:var(--bs-body-bg);font-size:.875em;padding:.1875rem .375rem}kbd kbd{font-size:1em;padding:0}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{border-collapse:collapse;caption-side:bottom}caption{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{float:left;font-size:calc(1.275rem + .3vw);line-height:inherit;margin-bottom:.5rem;padding:0;width:100%}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::file-selector-button{-webkit-appearance:button;font:inherit}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:initial}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;font-size:.875em;margin-bottom:1rem;margin-top:-1rem}.blockquote-footer:before{content:"— "}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:#fff;background-color:var(--bs-body-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;border-radius:var(--bs-border-radius);padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;margin-left:auto;margin-right:auto;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-left:calc(var(--bs-gutter-x)*-.5);margin-right:calc(var(--bs-gutter-x)*-.5);margin-top:calc(var(--bs-gutter-y)*-1)}.row>*{flex-shrink:0;margin-top:var(--bs-gutter-y);max-width:100%;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}.col{flex:1 0}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color-type:initial;--bs-table-bg-type:initial;--bs-table-color-state:initial;--bs-table-bg-state:initial;--bs-table-color:var(--bs-body-color);--bs-table-bg:var(--bs-body-bg);--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0,0,0,.05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0,0,0,.1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0,0,0,.075);border-color:var(--bs-table-border-color);margin-bottom:1rem;vertical-align:top;width:100%}.table>:not(caption)>*>*{background-color:var(--bs-table-bg);border-bottom-width:1px;border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg);box-shadow:inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)));color:var(--bs-table-color);color:var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid;border-top:calc(var(--bs-border-width)*2) solid}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0;border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 1px;border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped-columns>:not(caption)>tr>:nth-child(2n),.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}.table-active{--bs-table-color-state:var(--bs-table-active-color);--bs-table-bg-state:var(--bs-table-active-bg)}.table-hover>tbody>tr:hover>*{--bs-table-color-state:var(--bs-table-hover-color);--bs-table-bg-state:var(--bs-table-hover-bg)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#bacbe6;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000}.table-primary,.table-secondary{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#cbccce;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#bcd0c7;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000}.table-info,.table-success{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#badce3;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#e6dbb9;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000}.table-danger,.table-warning{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#dfc2c4;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#dfe0e1;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000}.table-dark,.table-light{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#373b3e;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff}.table-responsive{-webkit-overflow-scrolling:touch;overflow-x:auto}@media (max-width:575.98px){.table-responsive-sm{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:767.98px){.table-responsive-md{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:991.98px){.table-responsive-lg{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1199.98px){.table-responsive-xl{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1399.98px){.table-responsive-xxl{-webkit-overflow-scrolling:touch;overflow-x:auto}}.form-label{margin-bottom:.5rem}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + 1px);padding-bottom:calc(.375rem + var(--bs-border-width));padding-top:calc(.375rem + 1px);padding-top:calc(.375rem + var(--bs-border-width))}.col-form-label-lg{font-size:1.25rem;padding-bottom:calc(.5rem + 1px);padding-bottom:calc(.5rem + var(--bs-border-width));padding-top:calc(.5rem + 1px);padding-top:calc(.5rem + var(--bs-border-width))}.col-form-label-sm{font-size:.875rem;padding-bottom:calc(.25rem + 1px);padding-bottom:calc(.25rem + var(--bs-border-width));padding-top:calc(.25rem + 1px);padding-top:calc(.25rem + var(--bs-border-width))}.form-text{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);font-size:.875em;margin-top:.25rem}.form-control{-webkit-appearance:none;appearance:none;background-clip:padding-box;background-color:#fff;background-color:var(--bs-body-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#212529;color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{background-color:#fff;background-color:var(--bs-body-bg);border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);color:#212529;color:var(--bs-body-color);outline:0}.form-control::-webkit-date-and-time-value{height:1.5em;margin:0;min-width:85px}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-webkit-input-placeholder{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:#e9ecef;background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{-webkit-margin-end:.75rem;background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border:0 solid;border-color:inherit;border-inline-end-width:1px;border-inline-end-width:var(--bs-border-width);border-radius:0;color:#212529;color:var(--bs-body-color);margin:-.375rem -.75rem;margin-inline-end:.75rem;padding:.375rem .75rem;pointer-events:none;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{-webkit-margin-end:.75rem;background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border:0 solid;border-color:inherit;border-inline-end-width:1px;border-inline-end-width:var(--bs-border-width);border-radius:0;color:#212529;color:var(--bs-body-color);margin:-.375rem -.75rem;margin-inline-end:.75rem;padding:.375rem .75rem;pointer-events:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#e9ecef;background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#e9ecef;background-color:var(--bs-secondary-bg)}.form-control-plaintext{background-color:initial;border:solid transparent;border-width:1px 0;border-width:var(--bs-border-width) 0;color:#212529;color:var(--bs-body-color);display:block;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:.25rem;border-radius:var(--bs-border-radius-sm);font-size:.875rem;min-height:calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + var(--bs-border-width)*2);padding:.25rem .5rem}.form-control-sm::-webkit-file-upload-button{-webkit-margin-end:.5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem;padding:.25rem .5rem}.form-control-sm::file-selector-button{-webkit-margin-end:.5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem;padding:.25rem .5rem}.form-control-lg{border-radius:.5rem;border-radius:var(--bs-border-radius-lg);font-size:1.25rem;min-height:calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + var(--bs-border-width)*2);padding:.5rem 1rem}.form-control-lg::-webkit-file-upload-button{-webkit-margin-end:1rem;margin:-.5rem -1rem;margin-inline-end:1rem;padding:.5rem 1rem}.form-control-lg::file-selector-button{-webkit-margin-end:1rem;margin:-.5rem -1rem;margin-inline-end:1rem;padding:.5rem 1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px);min-height:calc(1.5em + .75rem + var(--bs-border-width)*2)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + var(--bs-border-width)*2)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-control-color{height:calc(1.5em + .75rem + 2px);height:calc(1.5em + .75rem + var(--bs-border-width)*2);padding:.375rem;width:3rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:.375rem;border-radius:var(--bs-border-radius)}.form-control-color::-webkit-color-swatch{border:0!important;border-radius:.375rem;border-radius:var(--bs-border-radius)}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + 2px);height:calc(1.5em + .5rem + var(--bs-border-width)*2)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px);height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-select{--bs-form-select-bg-img:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");-webkit-appearance:none;appearance:none;background-color:#fff;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),none;background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#212529;color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem 2.25rem .375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-select[multiple],.form-select[size]:not([size="1"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:#e9ecef;background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{border-radius:.25rem;border-radius:var(--bs-border-radius-sm);font-size:.875rem;padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.form-select-lg{border-radius:.5rem;border-radius:var(--bs-border-radius-lg);font-size:1.25rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23adb5bd' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E")}.form-check{display:block;margin-bottom:.125rem;min-height:1.5rem;padding-left:1.5em}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-left:0;padding-right:1.5em;text-align:right}.form-check-reverse .form-check-input{float:right;margin-left:0;margin-right:-1.5em}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);-webkit-appearance:none;appearance:none;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-position:50%;background-repeat:no-repeat;background-size:contain;border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);height:1em;margin-top:.25em;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:top;width:1em}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{-webkit-filter:brightness(90%);filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E")}.form-check-input[type=checkbox]:indeterminate{--bs-form-check-bg-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E");background-color:#0d6efd;border-color:#0d6efd}.form-check-input:disabled{-webkit-filter:none;filter:none;opacity:.5;pointer-events:none}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E");background-image:var(--bs-form-switch-bg);background-position:0;border-radius:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out;width:2em}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E")}.form-switch .form-check-input:checked{--bs-form-switch-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");background-position:100%}.form-switch.form-check-reverse{padding-left:0;padding-right:2.5em}.form-switch.form-check-reverse .form-check-input{margin-left:0;margin-right:-2.5em}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{clip:rect(0,0,0,0);pointer-events:none;position:absolute}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{-webkit-filter:none;filter:none;opacity:.65;pointer-events:none}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(255, 255, 255, 0.25)'/%3E%3C/svg%3E")}.form-range{-webkit-appearance:none;appearance:none;background-color:initial;height:1.5rem;padding:0;width:100%}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range::-moz-range-thumb{appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:rgba(33,37,41,.75);background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:rgba(33,37,41,.75);background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);height:calc(3.5rem + var(--bs-border-width)*2);line-height:1.25;min-height:calc(3.5rem + 2px);min-height:calc(3.5rem + var(--bs-border-width)*2)}.form-floating>label{border:1px solid transparent;border:var(--bs-border-width) solid transparent;height:100%;left:0;overflow:hidden;padding:1rem .75rem;pointer-events:none;position:absolute;text-align:start;text-overflow:ellipsis;top:0;-webkit-transform-origin:0 0;transform-origin:0 0;transition:opacity .1s ease-in-out,-webkit-transform .1s ease-in-out;transition:opacity .1s ease-in-out,transform .1s ease-in-out;transition:opacity .1s ease-in-out,transform .1s ease-in-out,-webkit-transform .1s ease-in-out;white-space:nowrap;z-index:2}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-webkit-input-placeholder,.form-floating>.form-control::-webkit-input-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-select{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{color:rgba(33,37,41,.65);color:rgba(var(--bs-body-color-rgb),.65);-webkit-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label:after,.form-floating>.form-control:focus~label:after,.form-floating>.form-control:not(:placeholder-shown)~label:after,.form-floating>.form-select~label:after{background-color:#fff;background-color:var(--bs-body-bg);border-radius:.375rem;border-radius:var(--bs-border-radius);content:"";height:1.5em;inset:1rem .375rem;position:absolute;z-index:-1}.form-floating>.form-control:-webkit-autofill~label{color:rgba(33,37,41,.65);color:rgba(var(--bs-body-color-rgb),.65);-webkit-transform:scale(.85) translateY(-.5rem) translateX(.15rem);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0;border-width:var(--bs-border-width) 0}.form-floating>:disabled~label{color:#6c757d}.form-floating>:disabled~label:after{background-color:#e9ecef;background-color:var(--bs-secondary-bg)}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{flex:1 1 auto;min-width:0;position:relative;width:1%}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{align-items:center;background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#212529;color:var(--bs-body-color);display:flex;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:.5rem;border-radius:var(--bs-border-radius-lg);font-size:1.25rem;padding:.5rem 1rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:.25rem;border-radius:var(--bs-border-radius-sm);font-size:.875rem;padding:.25rem .5rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-bottom-left-radius:0;border-top-left-radius:0}.valid-feedback{color:#198754;color:var(--bs-form-valid-color);display:none;font-size:.875em;margin-top:.25rem;width:100%}.valid-tooltip{background-color:#198754;background-color:var(--bs-success);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#198754;border-color:var(--bs-form-valid-border-color);padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754;border-color:var(--bs-form-valid-border-color)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3.75rem + 1.5em)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754;border-color:var(--bs-form-valid-border-color)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754;background-color:var(--bs-form-valid-color)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754;color:var(--bs-form-valid-color)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{color:#dc3545;color:var(--bs-form-invalid-color);display:none;font-size:.875em;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:#dc3545;background-color:var(--bs-danger);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;border-color:var(--bs-form-invalid-border-color);padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545;border-color:var(--bs-form-invalid-border-color)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3.75rem + 1.5em)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545;border-color:var(--bs-form-invalid-border-color)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545;background-color:var(--bs-form-invalid-color)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545;color:var(--bs-form-invalid-color)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 hsla(0,0%,100%,.15),0 1px 1px rgba(0,0,0,.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5);background-color:var(--bs-btn-bg);border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);color:var(--bs-btn-color);cursor:pointer;display:inline-block;font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);text-align:center;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;user-select:none;vertical-align:middle}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);color:var(--bs-btn-hover-color)}.btn-check+.btn:hover{background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color);color:var(--bs-btn-color)}.btn:focus-visible{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);color:var(--bs-btn-hover-color);outline:0}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);outline:0}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color);color:var(--bs-btn-active-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);color:var(--bs-btn-disabled-color);opacity:var(--bs-btn-disabled-opacity);pointer-events:none}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{height:auto;transition:width .35s ease;width:0}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:"";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 0.5rem 1rem rgba(0,0,0,.15);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;background-clip:padding-box;background-color:var(--bs-dropdown-bg);border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius);color:var(--bs-dropdown-color);display:none;font-size:var(--bs-dropdown-font-size);list-style:none;margin:0;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);position:absolute;text-align:left;z-index:var(--bs-dropdown-zindex)}.dropdown-menu[data-bs-popper]{left:0;margin-top:var(--bs-dropdown-spacer);top:100%}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{bottom:100%;margin-bottom:var(--bs-dropdown-spacer);margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:"";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{left:100%;margin-left:var(--bs-dropdown-spacer);margin-top:0;right:auto;top:0}.dropend .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:"";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{left:auto;margin-right:var(--bs-dropdown-spacer);margin-top:0;right:100%;top:0}.dropstart .dropdown-toggle:after{content:"";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:"";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{border-top:1px solid var(--bs-dropdown-divider-bg);height:0;margin:var(--bs-dropdown-divider-margin-y) 0;opacity:1;overflow:hidden}.dropdown-item{background-color:initial;border:0;border-radius:0;border-radius:var(--bs-dropdown-item-border-radius,0);clear:both;color:var(--bs-dropdown-link-color);display:block;font-weight:400;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);text-align:inherit;text-decoration:none;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:var(--bs-dropdown-link-hover-bg);color:var(--bs-dropdown-link-hover-color)}.dropdown-item.active,.dropdown-item:active{background-color:var(--bs-dropdown-link-active-bg);color:var(--bs-dropdown-link-active-color);text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:initial;color:var(--bs-dropdown-link-disabled-color);pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:var(--bs-dropdown-header-color);display:block;font-size:.875rem;margin-bottom:0;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);white-space:nowrap}.dropdown-item-text{color:var(--bs-dropdown-link-color);display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:hsla(0,0%,100%,.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem;border-radius:var(--bs-border-radius)}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px;margin-top:calc(var(--bs-border-width)*-1)}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{background:0 0;border:0;color:var(--bs-nav-link-color);display:block;font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);cursor:default;pointer-events:none}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius);margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:var(--bs-nav-tabs-link-hover-border-color);isolation:isolate}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{background-color:initial;border-color:transparent;color:var(--bs-nav-link-disabled-color)}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color);color:var(--bs-nav-tabs-link-active-color)}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{background-color:initial;border-color:transparent;color:var(--bs-nav-link-disabled-color)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:var(--bs-nav-pills-link-active-bg);color:var(--bs-nav-pills-link-active-color)}.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:0.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}.nav-underline .nav-link{border-bottom:var(--bs-nav-underline-border-width) solid transparent;padding-left:0;padding-right:0}.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:initial}.nav-underline .nav-link.active,.nav-underline .show>.nav-link{border-bottom-color:initial;color:var(--bs-nav-underline-link-active-color);font-weight:700}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb),0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb),0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb),0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(33, 37, 41, 0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb),0.15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{align-items:center;display:flex;flex-wrap:inherit;justify-content:space-between}.navbar-brand{color:var(--bs-navbar-brand-color);font-size:var(--bs-navbar-brand-font-size);margin-right:var(--bs-navbar-brand-margin-end);padding-bottom:var(--bs-navbar-brand-padding-y);padding-top:var(--bs-navbar-brand-padding-y);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{color:var(--bs-navbar-color);padding-bottom:.5rem;padding-top:.5rem}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:initial;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);color:var(--bs-navbar-color);font-size:var(--bs-navbar-toggler-font-size);line-height:1;padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width);outline:0;text-decoration:none}.navbar-toggler-icon{background-image:var(--bs-navbar-toggler-icon-bg);background-position:50%;background-repeat:no-repeat;background-size:100%;display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}.navbar-nav-scroll{max-height:75vh;max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{background-color:initial!important;border:0!important;flex-grow:1;height:auto!important;position:static;-webkit-transform:none!important;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}.navbar-dark,.navbar[data-bs-theme=dark]{--bs-navbar-color:hsla(0,0%,100%,.55);--bs-navbar-hover-color:hsla(0,0%,100%,.75);--bs-navbar-disabled-color:hsla(0,0%,100%,.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:hsla(0,0%,100%,.1)}.navbar-dark,.navbar[data-bs-theme=dark],[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb),0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;word-wrap:break-word;background-clip:initial;background-color:var(--bs-card-bg);border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius);color:#212529;color:var(--bs-body-color);display:flex;flex-direction:column;height:var(--bs-card-height);min-width:0;position:relative}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-bottom:inherit;border-top:inherit}.card>.list-group:first-child{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius);border-top-width:0}.card>.list-group:last-child{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{color:var(--bs-card-color);flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x)}.card-title{color:var(--bs-card-title-color);margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{color:var(--bs-card-subtitle-color);margin-top:calc(var(--bs-card-title-spacer-y)*-.5)}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);margin-bottom:0;padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{border-bottom:0;margin-bottom:calc(var(--bs-card-cap-padding-y)*-1);margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-img-overlay{border-radius:var(--bs-card-inner-border-radius);bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{align-items:center;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;color:var(--bs-accordion-btn-color);display:flex;font-size:1rem;overflow-anchor:none;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);position:relative;text-align:left;transition:var(--bs-accordion-transition);width:100%}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color);color:var(--bs-accordion-active-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);-webkit-transform:var(--bs-accordion-btn-icon-transform);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);content:"";flex-shrink:0;height:var(--bs-accordion-btn-icon-width);margin-left:auto;transition:var(--bs-accordion-btn-icon-transition);width:var(--bs-accordion-btn-icon-width)}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{border-color:var(--bs-accordion-btn-focus-border-color);box-shadow:var(--bs-accordion-btn-focus-box-shadow);outline:0;z-index:3}.accordion-header{margin-bottom:0}.accordion-item{background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);color:var(--bs-accordion-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:var(--bs-accordion-inner-border-radius);border-bottom-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-radius:0;border-right:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}[data-bs-theme=dark] .accordion-button:after{--bs-accordion-btn-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");--bs-accordion-btn-active-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius);display:flex;flex-wrap:wrap;font-size:var(--bs-breadcrumb-font-size);list-style:none;margin-bottom:var(--bs-breadcrumb-margin-bottom);padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{color:var(--bs-breadcrumb-divider-color);content:"/";content:var(--bs-breadcrumb-divider,"/");float:left;padding-right:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;list-style:none;padding-left:0}.page-link{background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);color:var(--bs-pagination-color);display:block;font-size:var(--bs-pagination-font-size);padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);position:relative;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color);color:var(--bs-pagination-hover-color);z-index:2}.page-link:focus{background-color:var(--bs-pagination-focus-bg);box-shadow:var(--bs-pagination-focus-box-shadow);color:var(--bs-pagination-focus-color);outline:0;z-index:3}.active>.page-link,.page-link.active{background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color);color:var(--bs-pagination-active-color);z-index:3}.disabled>.page-link,.page-link.disabled{background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color);color:var(--bs-pagination-disabled-color);pointer-events:none}.page-item:not(:first-child) .page-link{margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.page-item:first-child .page-link{border-bottom-left-radius:var(--bs-pagination-border-radius);border-top-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-bottom-right-radius:var(--bs-pagination-border-radius);border-top-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);border-radius:var(--bs-badge-border-radius);color:var(--bs-badge-color);display:inline-block;font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);text-align:center;vertical-align:initial;white-space:nowrap}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius);color:var(--bs-alert-color);margin-bottom:var(--bs-alert-margin-bottom);padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);position:relative}.alert-heading{color:inherit}.alert-link{color:var(--bs-alert-link-color);font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{padding:1.25rem 1rem;position:absolute;right:0;top:0;z-index:2}.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius);display:flex;font-size:var(--bs-progress-font-size);height:var(--bs-progress-height);overflow:hidden}.progress-bar{background-color:var(--bs-progress-bar-bg);color:var(--bs-progress-bar-color);display:flex;flex-direction:column;justify-content:center;overflow:hidden;text-align:center;transition:var(--bs-progress-bar-transition);white-space:nowrap}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;border-radius:var(--bs-list-group-border-radius);display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>.list-group-item:before{content:counters(section,".") ". ";counter-increment:section}.list-group-item-action{color:var(--bs-list-group-action-color);text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:var(--bs-list-group-action-hover-bg);color:var(--bs-list-group-action-hover-color);text-decoration:none;z-index:1}.list-group-item-action:active{background-color:var(--bs-list-group-action-active-bg);color:var(--bs-list-group-action-active-color)}.list-group-item{background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);color:var(--bs-list-group-color);display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);position:relative;text-decoration:none}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{background-color:var(--bs-list-group-disabled-bg);color:var(--bs-list-group-disabled-color);pointer-events:none}.list-group-item.active{background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color);color:var(--bs-list-group-active-color);z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:var(--bs-list-group-border-width);margin-top:calc(var(--bs-list-group-border-width)*-1)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-md>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E");--bs-btn-close-opacity:0.5;--bs-btn-close-hover-opacity:0.75;--bs-btn-close-focus-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:0.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;box-sizing:initial;height:1em;opacity:var(--bs-btn-close-opacity);padding:.25em;width:1em}.btn-close,.btn-close:hover{color:var(--bs-btn-close-color)}.btn-close:hover{opacity:var(--bs-btn-close-hover-opacity);text-decoration:none}.btn-close:focus{box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity);outline:0}.btn-close.disabled,.btn-close:disabled{opacity:var(--bs-btn-close-disabled-opacity);pointer-events:none;-webkit-user-select:none;user-select:none}.btn-close-white,[data-bs-theme=dark] .btn-close{-webkit-filter:var(--bs-btn-close-white-filter);filter:var(--bs-btn-close-white-filter)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);background-clip:padding-box;background-color:var(--bs-toast-bg);border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);border-radius:var(--bs-toast-border-radius);box-shadow:var(--bs-toast-box-shadow);color:var(--bs-toast-color);font-size:var(--bs-toast-font-size);max-width:100%;pointer-events:auto;width:var(--bs-toast-max-width)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;max-width:100%;pointer-events:none;position:absolute;width:-webkit-max-content;width:max-content;z-index:var(--bs-toast-zindex)}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{align-items:center;background-clip:padding-box;background-color:var(--bs-toast-header-bg);border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));color:var(--bs-toast-header-color);display:flex;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x)}.toast-header .btn-close{margin-left:var(--bs-toast-padding-x);margin-right:calc(var(--bs-toast-padding-x)*-.5)}.toast-body{word-wrap:break-word;padding:var(--bs-toast-padding-x)}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:0 0.125rem 0.25rem rgba(0,0,0,.075);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);display:none;height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:var(--bs-modal-zindex)}.modal-dialog{margin:var(--bs-modal-margin);pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{-webkit-transform:translateY(-50px);transform:translateY(-50px);transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{background-clip:padding-box;background-color:var(--bs-modal-bg);border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);color:var(--bs-modal-color);display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;background-color:var(--bs-backdrop-bg);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:var(--bs-backdrop-zindex)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{align-items:center;border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius);display:flex;flex-shrink:0;justify-content:space-between;padding:var(--bs-modal-header-padding)}.modal-header .btn-close{margin:calc(var(--bs-modal-header-padding-y)*-.5) calc(var(--bs-modal-header-padding-x)*-.5) calc(var(--bs-modal-header-padding-y)*-.5) auto;padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5)}.modal-title{line-height:var(--bs-modal-title-line-height);margin-bottom:0}.modal-body{flex:1 1 auto;padding:var(--bs-modal-padding);position:relative}.modal-footer{align-items:center;background-color:var(--bs-modal-footer-bg);border-bottom-left-radius:var(--bs-modal-inner-border-radius);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 0.5rem 1rem rgba(0,0,0,.15)}.modal-dialog{margin-left:auto;margin-right:auto;max-width:var(--bs-modal-width)}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;word-wrap:break-word;display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-family:var(--bs-font-sans-serif);font-size:var(--bs-tooltip-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:var(--bs-tooltip-margin);opacity:0;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:var(--bs-tooltip-zindex)}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;height:var(--bs-tooltip-arrow-height);width:var(--bs-tooltip-arrow-width)}.tooltip .tooltip-arrow:before{border-color:transparent;border-style:solid;content:"";position:absolute}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(var(--bs-tooltip-arrow-height)*-1)}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-top-color:var(--bs-tooltip-bg);border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;top:-1px}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{height:var(--bs-tooltip-arrow-width);left:calc(var(--bs-tooltip-arrow-height)*-1);width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-right-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(var(--bs-tooltip-arrow-height)*-1)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-bottom-color:var(--bs-tooltip-bg);border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{height:var(--bs-tooltip-arrow-width);right:calc(var(--bs-tooltip-arrow-height)*-1);width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-left-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);left:-1px}.tooltip-inner{background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius);color:var(--bs-tooltip-color);max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);text-align:center}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:0 0.5rem 1rem rgba(0,0,0,.15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color:inherit;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);word-wrap:break-word;background-clip:padding-box;background-color:var(--bs-popover-bg);border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius);display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-family:var(--bs-font-sans-serif);font-size:var(--bs-popover-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:var(--bs-popover-max-width);text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:var(--bs-popover-zindex)}.popover .popover-arrow{display:block;height:var(--bs-popover-arrow-height);width:var(--bs-popover-arrow-width)}.popover .popover-arrow:after,.popover .popover-arrow:before{border:0 solid transparent;content:"";display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:var(--bs-popover-arrow-border);bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{border-top-color:var(--bs-popover-bg);bottom:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{height:var(--bs-popover-arrow-width);left:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:var(--bs-popover-arrow-border);left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{border-right-color:var(--bs-popover-bg);left:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:var(--bs-popover-arrow-border);top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{border-bottom-color:var(--bs-popover-bg);top:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg);content:"";display:block;left:50%;margin-left:calc(var(--bs-popover-arrow-width)*-.5);position:absolute;top:0;width:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{height:var(--bs-popover-arrow-width);right:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:var(--bs-popover-arrow-border);right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{border-left-color:var(--bs-popover-bg);right:var(--bs-popover-border-width)}.popover-header{background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius);color:var(--bs-popover-header-color);font-size:var(--bs-popover-header-font-size);margin-bottom:0;padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x)}.popover-header:empty{display:none}.popover-body{color:var(--bs-popover-body-color);padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:"";display:block}.carousel-item{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;-webkit-transform:none;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{opacity:0;transition:opacity 0s .6s;z-index:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;background:0 0;border:0;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;padding:0;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:2rem;width:2rem}.carousel-control-prev-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E")}.carousel-control-next-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;position:absolute;right:0;z-index:2}.carousel-indicators [data-bs-target]{background-clip:padding-box;background-color:#fff;border:0;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:initial;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;padding:0;text-indent:-999px;transition:opacity .6s ease;width:30px}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:1.25rem;color:#fff;left:15%;padding-bottom:1.25rem;padding-top:1.25rem;position:absolute;right:15%;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{-webkit-filter:invert(1) grayscale(100);filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}[data-bs-theme=dark] .carousel .carousel-control-next-icon,[data-bs-theme=dark] .carousel .carousel-control-prev-icon,[data-bs-theme=dark].carousel .carousel-control-next-icon,[data-bs-theme=dark].carousel .carousel-control-prev-icon{-webkit-filter:invert(1) grayscale(100);filter:invert(1) grayscale(100)}[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target],[data-bs-theme=dark].carousel .carousel-indicators [data-bs-target]{background-color:#000}[data-bs-theme=dark] .carousel .carousel-caption,[data-bs-theme=dark].carousel .carousel-caption{color:#000}.spinner-border,.spinner-grow{-webkit-animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);border-radius:50%;display:inline-block;height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);width:var(--bs-spinner-width)}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-border{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border-right-color:currentcolor;border:var(--bs-spinner-border-width) solid;border-right:var(--bs-spinner-border-width) solid transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 0.125rem 0.25rem rgba(0,0,0,.075);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (max-width:575.98px){.offcanvas-sm{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom,.offcanvas-sm.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-sm.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{-webkit-transform:none;transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:initial!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{background-color:initial!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:767.98px){.offcanvas-md{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom,.offcanvas-md.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-md.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{-webkit-transform:none;transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:initial!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{background-color:initial!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:991.98px){.offcanvas-lg{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom,.offcanvas-lg.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-lg.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{-webkit-transform:none;transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:initial!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{background-color:initial!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1199.98px){.offcanvas-xl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom,.offcanvas-xl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{-webkit-transform:none;transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:initial!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{background-color:initial!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1399.98px){.offcanvas-xxl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom,.offcanvas-xxl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xxl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{-webkit-transform:none;transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:initial!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{background-color:initial!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}.offcanvas{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.offcanvas.offcanvas-bottom,.offcanvas.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);-webkit-transform:translateY(100%);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{-webkit-transform:none;transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{align-items:center;display:flex;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{margin-bottom:calc(var(--bs-offcanvas-padding-y)*-.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-.5);padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5)}.offcanvas-title{line-height:var(--bs-offcanvas-title-line-height);margin-bottom:0}.offcanvas-body{flex-grow:1;overflow-y:auto;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.placeholder{background-color:currentcolor;cursor:wait;display:inline-block;min-height:1em;opacity:.5;vertical-align:middle}.placeholder.btn:before{content:"";display:inline-block}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{-webkit-animation:placeholder-glow 2s ease-in-out infinite;animation:placeholder-glow 2s ease-in-out infinite}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-animation:placeholder-wave 2s linear infinite;animation:placeholder-wave 2s linear infinite;-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%}@-webkit-keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.clearfix:after{clear:both;content:"";display:block}.text-bg-primary{background-color:#0d6efd!important;background-color:RGBA(13,110,253,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-secondary{background-color:#6c757d!important;background-color:RGBA(108,117,125,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-success{background-color:#198754!important;background-color:RGBA(25,135,84,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-info{background-color:#0dcaf0!important;background-color:RGBA(13,202,240,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-warning{background-color:#ffc107!important;background-color:RGBA(255,193,7,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-danger{background-color:#dc3545!important;background-color:RGBA(220,53,69,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-light{background-color:#f8f9fa!important;background-color:RGBA(248,249,250,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-dark{background-color:#212529!important;background-color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important;color:#fff!important}.link-primary{color:#0d6efd!important;color:RGBA(var(--bs-primary-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#0d6efd!important;text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important}.link-primary:focus,.link-primary:hover{color:#0a58ca!important;color:RGBA(10,88,202,var(--bs-link-opacity,1))!important;text-decoration-color:#0a58ca!important;text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important}.link-secondary{color:#6c757d!important;color:RGBA(var(--bs-secondary-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#6c757d!important;text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important}.link-secondary:focus,.link-secondary:hover{color:#565e64!important;color:RGBA(86,94,100,var(--bs-link-opacity,1))!important;text-decoration-color:#565e64!important;text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important}.link-success{color:#198754!important;color:RGBA(var(--bs-success-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#198754!important;text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important}.link-success:focus,.link-success:hover{color:#146c43!important;color:RGBA(20,108,67,var(--bs-link-opacity,1))!important;text-decoration-color:#146c43!important;text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important}.link-info{color:#0dcaf0!important;color:RGBA(var(--bs-info-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#0dcaf0!important;text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important}.link-info:focus,.link-info:hover{color:#3dd5f3!important;color:RGBA(61,213,243,var(--bs-link-opacity,1))!important;text-decoration-color:#3dd5f3!important;text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important}.link-warning{color:#ffc107!important;color:RGBA(var(--bs-warning-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#ffc107!important;text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important}.link-warning:focus,.link-warning:hover{color:#ffcd39!important;color:RGBA(255,205,57,var(--bs-link-opacity,1))!important;text-decoration-color:#ffcd39!important;text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important}.link-danger{color:#dc3545!important;color:RGBA(var(--bs-danger-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#dc3545!important;text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important}.link-danger:focus,.link-danger:hover{color:#b02a37!important;color:RGBA(176,42,55,var(--bs-link-opacity,1))!important;text-decoration-color:#b02a37!important;text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important}.link-light{color:#f8f9fa!important;color:RGBA(var(--bs-light-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#f8f9fa!important;text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important}.link-light:focus,.link-light:hover{color:#f9fafb!important;color:RGBA(249,250,251,var(--bs-link-opacity,1))!important;text-decoration-color:#f9fafb!important;text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important}.link-dark{color:#212529!important;color:RGBA(var(--bs-dark-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#212529!important;text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important}.link-dark:focus,.link-dark:hover{color:#1a1e21!important;color:RGBA(26,30,33,var(--bs-link-opacity,1))!important;text-decoration-color:#1a1e21!important;text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important}.link-body-emphasis{color:#000!important;color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:#000!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-body-emphasis:focus,.link-body-emphasis:hover{color:rgba(0,0,0,.75)!important;color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75))!important;text-decoration-color:rgba(0,0,0,.75)!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))!important}.focus-ring:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);outline:0}.icon-link{align-items:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:inline-flex;gap:.375rem;text-decoration-color:rgba(13,110,253,.5);text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-underline-offset:.25em}.icon-link>.bi{fill:currentcolor;flex-shrink:0;height:1em;transition:transform .2s ease-in-out;width:1em}@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{-webkit-transform:translate3d(.25em,0,0);transform:translate3d(.25em,0,0);-webkit-transform:var(--bs-icon-link-transform,translate3d(.25em,0,0));transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}.ratio{position:relative;width:100%}.ratio:before{content:"";display:block;padding-top:var(--bs-aspect-ratio)}.ratio>*{height:100%;left:0;position:absolute;top:0;width:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{top:0}.sticky-bottom,.sticky-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-bottom{bottom:0}@media (min-width:576px){.sticky-sm-top{top:0}.sticky-sm-bottom,.sticky-sm-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-sm-bottom{bottom:0}}@media (min-width:768px){.sticky-md-top{top:0}.sticky-md-bottom,.sticky-md-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-md-bottom{bottom:0}}@media (min-width:992px){.sticky-lg-top{top:0}.sticky-lg-bottom,.sticky-lg-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-lg-bottom{bottom:0}}@media (min-width:1200px){.sticky-xl-top{top:0}.sticky-xl-bottom,.sticky-xl-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-xl-bottom{bottom:0}}@media (min-width:1400px){.sticky-xxl-top{top:0}.sticky-xxl-bottom,.sticky-xxl-top{position:-webkit-sticky;position:sticky;z-index:1020}.sticky-xxl-bottom{bottom:0}}.hstack{align-items:center;flex-direction:row}.hstack,.vstack{align-self:stretch;display:flex}.vstack{flex:1 1 auto;flex-direction:column}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){clip:rect(0,0,0,0)!important;border:0!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important;width:1px!important}.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}.stretched-link:after{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:1px}.align-baseline{vertical-align:initial!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{object-fit:contain!important}.object-fit-cover{object-fit:cover!important}.object-fit-fill{object-fit:fill!important}.object-fit-scale{object-fit:scale-down!important}.object-fit-none{object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-inline-grid{display:inline-grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb),var(--bs-focus-ring-opacity))}.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb),var(--bs-focus-ring-opacity))}.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb),var(--bs-focus-ring-opacity))}.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb),var(--bs-focus-ring-opacity))}.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb),var(--bs-focus-ring-opacity))}.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb),var(--bs-focus-ring-opacity))}.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb),var(--bs-focus-ring-opacity))}.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb),var(--bs-focus-ring-opacity))}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{-webkit-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important}.translate-middle-x{-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important}.translate-middle-y{-webkit-transform:translateY(-50%)!important;transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important;border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important;border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important;border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important;border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important;border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:#9ec5fe!important;border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:#c4c8cb!important;border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:#a3cfbb!important;border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:#9eeaf9!important;border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:#ffe69c!important;border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:#f1aeb5!important;border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:#e9ecef!important;border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:#adb5bd!important;border-color:var(--bs-dark-border-subtle)!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.border-opacity-10{--bs-border-opacity:0.1}.border-opacity-25{--bs-border-opacity:0.25}.border-opacity-50{--bs-border-opacity:0.5}.border-opacity-75{--bs-border-opacity:0.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-bottom:0!important;margin-top:0!important}.my-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important;font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(13,110,253,var(--bs-text-opacity))!important;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(108,117,125,var(--bs-text-opacity))!important;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(25,135,84,var(--bs-text-opacity))!important;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(13,202,240,var(--bs-text-opacity))!important;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(255,193,7,var(--bs-text-opacity))!important;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(220,53,69,var(--bs-text-opacity))!important;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(248,249,250,var(--bs-text-opacity))!important;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(33,37,41,var(--bs-text-opacity))!important;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(0,0,0,var(--bs-text-opacity))!important;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(255,255,255,var(--bs-text-opacity))!important;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(33,37,41,var(--bs-text-opacity))!important;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:rgba(33,37,41,.75)!important;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:hsla(0,0%,100%,.5)!important}.text-body-secondary{--bs-text-opacity:1;color:rgba(33,37,41,.75)!important;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:rgba(33,37,41,.5)!important;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:#000!important;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:#052c65!important;color:var(--bs-primary-text-emphasis)!important}.text-secondary-emphasis{color:#2b2f32!important;color:var(--bs-secondary-text-emphasis)!important}.text-success-emphasis{color:#0a3622!important;color:var(--bs-success-text-emphasis)!important}.text-info-emphasis{color:#055160!important;color:var(--bs-info-text-emphasis)!important}.text-warning-emphasis{color:#664d03!important;color:var(--bs-warning-text-emphasis)!important}.text-danger-emphasis{color:#58151c!important;color:var(--bs-danger-text-emphasis)!important}.text-light-emphasis{color:#495057!important;color:var(--bs-light-text-emphasis)!important}.text-dark-emphasis{color:#495057!important;color:var(--bs-dark-text-emphasis)!important}.link-opacity-10,.link-opacity-10-hover:hover{--bs-link-opacity:0.1}.link-opacity-25,.link-opacity-25-hover:hover{--bs-link-opacity:0.25}.link-opacity-50,.link-opacity-50-hover:hover{--bs-link-opacity:0.5}.link-opacity-75,.link-opacity-75-hover:hover{--bs-link-opacity:0.75}.link-opacity-100,.link-opacity-100-hover:hover{--bs-link-opacity:1}.link-offset-1,.link-offset-1-hover:hover{text-underline-offset:.125em!important}.link-offset-2,.link-offset-2-hover:hover{text-underline-offset:.25em!important}.link-offset-3,.link-offset-3-hover:hover{text-underline-offset:.375em!important}.link-underline-primary{--bs-link-underline-opacity:1;text-decoration-color:rgba(13,110,253,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-secondary{--bs-link-underline-opacity:1;text-decoration-color:rgba(108,117,125,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-success{--bs-link-underline-opacity:1;text-decoration-color:rgba(25,135,84,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}.link-underline-info{--bs-link-underline-opacity:1;text-decoration-color:rgba(13,202,240,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}.link-underline-warning{--bs-link-underline-opacity:1;text-decoration-color:rgba(255,193,7,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}.link-underline-danger{--bs-link-underline-opacity:1;text-decoration-color:rgba(220,53,69,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}.link-underline-light{--bs-link-underline-opacity:1;text-decoration-color:rgba(248,249,250,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}.link-underline-dark{--bs-link-underline-opacity:1;text-decoration-color:rgba(33,37,41,var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}.link-underline{--bs-link-underline-opacity:1;text-decoration-color:#0d6efd!important;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-underline-opacity-0,.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}.link-underline-opacity-10,.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:0.1}.link-underline-opacity-25,.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:0.25}.link-underline-opacity-50,.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:0.5}.link-underline-opacity-75,.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:0.75}.link-underline-opacity-100,.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(13,110,253,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(108,117,125,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(25,135,84,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(13,202,240,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(255,193,7,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(220,53,69,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(248,249,250,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(33,37,41,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(0,0,0,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(255,255,255,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(255,255,255,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:initial!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(233,236,239,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(248,249,250,var(--bs-bg-opacity))!important;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:#cfe2ff!important;background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:#e2e3e5!important;background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:#d1e7dd!important;background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:#cff4fc!important;background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:#fff3cd!important;background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:#f8d7da!important;background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:#fcfcfd!important;background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:#ced4da!important;background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))!important;background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.375rem!important;border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.25rem!important;border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:.375rem!important;border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:.5rem!important;border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:1rem!important;border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:2rem!important;border-radius:var(--bs-border-radius-xxl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important;border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:.25rem!important;border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:.25rem!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:.5rem!important;border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:.5rem!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:1rem!important;border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:1rem!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:2rem!important;border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:2rem!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:50rem!important;border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:50rem!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-bottom-right-radius:0!important;border-top-right-radius:0!important}.rounded-end-1{border-bottom-right-radius:.25rem!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:.25rem!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-bottom-right-radius:.5rem!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:.5rem!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-bottom-right-radius:1rem!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:1rem!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-bottom-right-radius:2rem!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:2rem!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-end-circle{border-bottom-right-radius:50%!important;border-top-right-radius:50%!important}.rounded-end-pill{border-bottom-right-radius:50rem!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:50rem!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.rounded-bottom-1{border-bottom-left-radius:.25rem!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:.25rem!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-left-radius:.5rem!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:.5rem!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-left-radius:1rem!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:1rem!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-left-radius:2rem!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:2rem!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}.rounded-bottom-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-bottom-pill{border-bottom-left-radius:50rem!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:50rem!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:.25rem!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:.25rem!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:.5rem!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:.5rem!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:1rem!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:1rem!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:2rem!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:2rem!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:50rem!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:50rem!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{object-fit:contain!important}.object-fit-sm-cover{object-fit:cover!important}.object-fit-sm-fill{object-fit:fill!important}.object-fit-sm-scale{object-fit:scale-down!important}.object-fit-sm-none{object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-bottom:0!important;margin-top:0!important}.my-sm-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-sm-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-sm-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-sm-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-sm-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-sm-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-bottom:0!important;padding-top:0!important}.py-sm-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-sm-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-sm-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-sm-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-sm-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{object-fit:contain!important}.object-fit-md-cover{object-fit:cover!important}.object-fit-md-fill{object-fit:fill!important}.object-fit-md-scale{object-fit:scale-down!important}.object-fit-md-none{object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-bottom:0!important;margin-top:0!important}.my-md-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-md-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-md-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-md-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-md-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-md-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-bottom:0!important;padding-top:0!important}.py-md-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-md-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-md-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-md-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-md-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{object-fit:contain!important}.object-fit-lg-cover{object-fit:cover!important}.object-fit-lg-fill{object-fit:fill!important}.object-fit-lg-scale{object-fit:scale-down!important}.object-fit-lg-none{object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-bottom:0!important;margin-top:0!important}.my-lg-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-lg-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-lg-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-lg-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-lg-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-lg-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-bottom:0!important;padding-top:0!important}.py-lg-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-lg-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-lg-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-lg-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-lg-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{object-fit:contain!important}.object-fit-xl-cover{object-fit:cover!important}.object-fit-xl-fill{object-fit:fill!important}.object-fit-xl-scale{object-fit:scale-down!important}.object-fit-xl-none{object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-bottom:0!important;margin-top:0!important}.my-xl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-bottom:0!important;padding-top:0!important}.py-xl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{object-fit:contain!important}.object-fit-xxl-cover{object-fit:cover!important}.object-fit-xxl-fill{object-fit:fill!important}.object-fit-xxl-scale{object-fit:scale-down!important}.object-fit-xxl-none{object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-bottom:0!important;margin-top:0!important}.my-xxl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xxl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xxl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xxl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xxl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xxl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-bottom:0!important;padding-top:0!important}.py-xxl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xxl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xxl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xxl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xxl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-webkit-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-webkit-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-webkit-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-webkit-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-webkit-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-webkit-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}[data-aos][data-aos][data-aos-duration="50"],body[data-aos-duration="50"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay="50"],body[data-aos-delay="50"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="50"].aos-animate,body[data-aos-delay="50"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration="100"],body[data-aos-duration="100"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay="100"],body[data-aos-delay="100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="100"].aos-animate,body[data-aos-delay="100"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration="150"],body[data-aos-duration="150"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay="150"],body[data-aos-delay="150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="150"].aos-animate,body[data-aos-delay="150"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration="200"],body[data-aos-duration="200"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay="200"],body[data-aos-delay="200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="200"].aos-animate,body[data-aos-delay="200"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration="250"],body[data-aos-duration="250"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay="250"],body[data-aos-delay="250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="250"].aos-animate,body[data-aos-delay="250"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration="300"],body[data-aos-duration="300"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay="300"],body[data-aos-delay="300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="300"].aos-animate,body[data-aos-delay="300"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration="350"],body[data-aos-duration="350"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay="350"],body[data-aos-delay="350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="350"].aos-animate,body[data-aos-delay="350"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration="400"],body[data-aos-duration="400"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay="400"],body[data-aos-delay="400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="400"].aos-animate,body[data-aos-delay="400"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration="450"],body[data-aos-duration="450"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay="450"],body[data-aos-delay="450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="450"].aos-animate,body[data-aos-delay="450"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration="500"],body[data-aos-duration="500"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay="500"],body[data-aos-delay="500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="500"].aos-animate,body[data-aos-delay="500"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration="550"],body[data-aos-duration="550"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay="550"],body[data-aos-delay="550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="550"].aos-animate,body[data-aos-delay="550"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration="600"],body[data-aos-duration="600"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay="600"],body[data-aos-delay="600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="600"].aos-animate,body[data-aos-delay="600"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration="650"],body[data-aos-duration="650"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay="650"],body[data-aos-delay="650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="650"].aos-animate,body[data-aos-delay="650"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration="700"],body[data-aos-duration="700"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay="700"],body[data-aos-delay="700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="700"].aos-animate,body[data-aos-delay="700"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration="750"],body[data-aos-duration="750"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay="750"],body[data-aos-delay="750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="750"].aos-animate,body[data-aos-delay="750"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration="800"],body[data-aos-duration="800"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay="800"],body[data-aos-delay="800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="800"].aos-animate,body[data-aos-delay="800"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration="850"],body[data-aos-duration="850"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay="850"],body[data-aos-delay="850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="850"].aos-animate,body[data-aos-delay="850"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration="900"],body[data-aos-duration="900"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay="900"],body[data-aos-delay="900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="900"].aos-animate,body[data-aos-delay="900"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration="950"],body[data-aos-duration="950"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay="950"],body[data-aos-delay="950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="950"].aos-animate,body[data-aos-delay="950"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration="1000"],body[data-aos-duration="1000"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay="1000"],body[data-aos-delay="1000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1000"].aos-animate,body[data-aos-delay="1000"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration="1050"],body[data-aos-duration="1050"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay="1050"],body[data-aos-delay="1050"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1050"].aos-animate,body[data-aos-delay="1050"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration="1100"],body[data-aos-duration="1100"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay="1100"],body[data-aos-delay="1100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1100"].aos-animate,body[data-aos-delay="1100"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration="1150"],body[data-aos-duration="1150"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay="1150"],body[data-aos-delay="1150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1150"].aos-animate,body[data-aos-delay="1150"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration="1200"],body[data-aos-duration="1200"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay="1200"],body[data-aos-delay="1200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1200"].aos-animate,body[data-aos-delay="1200"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration="1250"],body[data-aos-duration="1250"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay="1250"],body[data-aos-delay="1250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1250"].aos-animate,body[data-aos-delay="1250"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration="1300"],body[data-aos-duration="1300"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay="1300"],body[data-aos-delay="1300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1300"].aos-animate,body[data-aos-delay="1300"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration="1350"],body[data-aos-duration="1350"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay="1350"],body[data-aos-delay="1350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1350"].aos-animate,body[data-aos-delay="1350"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration="1400"],body[data-aos-duration="1400"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay="1400"],body[data-aos-delay="1400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1400"].aos-animate,body[data-aos-delay="1400"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration="1450"],body[data-aos-duration="1450"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay="1450"],body[data-aos-delay="1450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1450"].aos-animate,body[data-aos-delay="1450"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration="1500"],body[data-aos-duration="1500"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay="1500"],body[data-aos-delay="1500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1500"].aos-animate,body[data-aos-delay="1500"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration="1550"],body[data-aos-duration="1550"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay="1550"],body[data-aos-delay="1550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1550"].aos-animate,body[data-aos-delay="1550"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration="1600"],body[data-aos-duration="1600"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay="1600"],body[data-aos-delay="1600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1600"].aos-animate,body[data-aos-delay="1600"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration="1650"],body[data-aos-duration="1650"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay="1650"],body[data-aos-delay="1650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1650"].aos-animate,body[data-aos-delay="1650"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration="1700"],body[data-aos-duration="1700"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay="1700"],body[data-aos-delay="1700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1700"].aos-animate,body[data-aos-delay="1700"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration="1750"],body[data-aos-duration="1750"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay="1750"],body[data-aos-delay="1750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1750"].aos-animate,body[data-aos-delay="1750"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration="1800"],body[data-aos-duration="1800"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay="1800"],body[data-aos-delay="1800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1800"].aos-animate,body[data-aos-delay="1800"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration="1850"],body[data-aos-duration="1850"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay="1850"],body[data-aos-delay="1850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1850"].aos-animate,body[data-aos-delay="1850"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration="1900"],body[data-aos-duration="1900"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay="1900"],body[data-aos-delay="1900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1900"].aos-animate,body[data-aos-delay="1900"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration="1950"],body[data-aos-duration="1950"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay="1950"],body[data-aos-delay="1950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1950"].aos-animate,body[data-aos-delay="1950"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration="2000"],body[data-aos-duration="2000"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay="2000"],body[data-aos-delay="2000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2000"].aos-animate,body[data-aos-delay="2000"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration="2050"],body[data-aos-duration="2050"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay="2050"],body[data-aos-delay="2050"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2050"].aos-animate,body[data-aos-delay="2050"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration="2100"],body[data-aos-duration="2100"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay="2100"],body[data-aos-delay="2100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2100"].aos-animate,body[data-aos-delay="2100"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration="2150"],body[data-aos-duration="2150"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay="2150"],body[data-aos-delay="2150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2150"].aos-animate,body[data-aos-delay="2150"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration="2200"],body[data-aos-duration="2200"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay="2200"],body[data-aos-delay="2200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2200"].aos-animate,body[data-aos-delay="2200"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration="2250"],body[data-aos-duration="2250"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay="2250"],body[data-aos-delay="2250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2250"].aos-animate,body[data-aos-delay="2250"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration="2300"],body[data-aos-duration="2300"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay="2300"],body[data-aos-delay="2300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2300"].aos-animate,body[data-aos-delay="2300"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration="2350"],body[data-aos-duration="2350"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay="2350"],body[data-aos-delay="2350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2350"].aos-animate,body[data-aos-delay="2350"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration="2400"],body[data-aos-duration="2400"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay="2400"],body[data-aos-delay="2400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2400"].aos-animate,body[data-aos-delay="2400"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration="2450"],body[data-aos-duration="2450"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay="2450"],body[data-aos-delay="2450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2450"].aos-animate,body[data-aos-delay="2450"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration="2500"],body[data-aos-duration="2500"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay="2500"],body[data-aos-delay="2500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2500"].aos-animate,body[data-aos-delay="2500"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration="2550"],body[data-aos-duration="2550"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay="2550"],body[data-aos-delay="2550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2550"].aos-animate,body[data-aos-delay="2550"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration="2600"],body[data-aos-duration="2600"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay="2600"],body[data-aos-delay="2600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2600"].aos-animate,body[data-aos-delay="2600"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration="2650"],body[data-aos-duration="2650"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay="2650"],body[data-aos-delay="2650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2650"].aos-animate,body[data-aos-delay="2650"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration="2700"],body[data-aos-duration="2700"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay="2700"],body[data-aos-delay="2700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2700"].aos-animate,body[data-aos-delay="2700"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration="2750"],body[data-aos-duration="2750"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay="2750"],body[data-aos-delay="2750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2750"].aos-animate,body[data-aos-delay="2750"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration="2800"],body[data-aos-duration="2800"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay="2800"],body[data-aos-delay="2800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2800"].aos-animate,body[data-aos-delay="2800"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration="2850"],body[data-aos-duration="2850"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay="2850"],body[data-aos-delay="2850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2850"].aos-animate,body[data-aos-delay="2850"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration="2900"],body[data-aos-duration="2900"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay="2900"],body[data-aos-delay="2900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2900"].aos-animate,body[data-aos-delay="2900"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration="2950"],body[data-aos-duration="2950"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay="2950"],body[data-aos-delay="2950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2950"].aos-animate,body[data-aos-delay="2950"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration="3000"],body[data-aos-duration="3000"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay="3000"],body[data-aos-delay="3000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="3000"].aos-animate,body[data-aos-delay="3000"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}[data-aos=fade-up]{-webkit-transform:translate3d(0,100px,0);transform:translate3d(0,100px,0)}[data-aos=fade-down]{-webkit-transform:translate3d(0,-100px,0);transform:translate3d(0,-100px,0)}[data-aos=fade-right]{-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}[data-aos=fade-left]{-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}[data-aos=fade-up-right]{-webkit-transform:translate3d(-100px,100px,0);transform:translate3d(-100px,100px,0)}[data-aos=fade-up-left]{-webkit-transform:translate3d(100px,100px,0);transform:translate3d(100px,100px,0)}[data-aos=fade-down-right]{-webkit-transform:translate3d(-100px,-100px,0);transform:translate3d(-100px,-100px,0)}[data-aos=fade-down-left]{-webkit-transform:translate3d(100px,-100px,0);transform:translate3d(100px,-100px,0)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}[data-aos=zoom-in]{-webkit-transform:scale(.6);transform:scale(.6)}[data-aos=zoom-in-up]{-webkit-transform:translate3d(0,100px,0) scale(.6);transform:translate3d(0,100px,0) scale(.6)}[data-aos=zoom-in-down]{-webkit-transform:translate3d(0,-100px,0) scale(.6);transform:translate3d(0,-100px,0) scale(.6)}[data-aos=zoom-in-right]{-webkit-transform:translate3d(-100px,0,0) scale(.6);transform:translate3d(-100px,0,0) scale(.6)}[data-aos=zoom-in-left]{-webkit-transform:translate3d(100px,0,0) scale(.6);transform:translate3d(100px,0,0) scale(.6)}[data-aos=zoom-out]{-webkit-transform:scale(1.2);transform:scale(1.2)}[data-aos=zoom-out-up]{-webkit-transform:translate3d(0,100px,0) scale(1.2);transform:translate3d(0,100px,0) scale(1.2)}[data-aos=zoom-out-down]{-webkit-transform:translate3d(0,-100px,0) scale(1.2);transform:translate3d(0,-100px,0) scale(1.2)}[data-aos=zoom-out-right]{-webkit-transform:translate3d(-100px,0,0) scale(1.2);transform:translate3d(-100px,0,0) scale(1.2)}[data-aos=zoom-out-left]{-webkit-transform:translate3d(100px,0,0) scale(1.2);transform:translate3d(100px,0,0) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}[data-aos^=slide][data-aos^=slide].aos-animate{-webkit-transform:translateZ(0);transform:translateZ(0)}[data-aos=slide-up]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}[data-aos=slide-down]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}[data-aos=slide-right]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}[data-aos=slide-left]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}[data-aos^=flip][data-aos^=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}[data-aos=flip-left]{-webkit-transform:perspective(2500px) rotateY(-100deg);transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{-webkit-transform:perspective(2500px) rotateY(100deg);transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{-webkit-transform:perspective(2500px) rotateX(-100deg);transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{-webkit-transform:perspective(2500px) rotateX(100deg);transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}.login-admin{background-color:#eff0f4;height:100vh;inset:0;position:relative;width:100%}.login-admin .login-content{background-color:#fff;border:1px solid #0000001f;border-radius:10px;left:50%;min-height:600px;padding:25px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:47%}.login-admin .login-content .logo{align-items:center;display:flex;flex-direction:column;justify-content:center}.login-admin .login-content .logo img{height:65px;object-fit:contain;width:200px}.login-admin .login-content .logo div h1{align-items:center;color:#000;display:flex;flex-direction:row;font-size:20px;font-weight:400;font-weight:500;gap:15px}.login-admin .login-content .logo div h1 i{align-items:center;background-color:#dc5dd0;border-radius:50%;color:#fff;display:flex;flex-direction:row;font-size:13px;height:22px;justify-content:center;padding:8px;width:22px}.login-admin .login-content .logo div h2{color:#9c9c9c;font-size:17px;font-weight:400;text-align:center}.login-admin .login-content .login-form{margin-top:30px}.login-admin .login-content .login-form form{align-items:center;display:flex;flex-direction:column;gap:15px;width:100%}.login-admin .login-content .login-form form .input{align-items:flex-start;display:flex;flex-direction:column;gap:5px;position:relative;width:100%}.login-admin .login-content .login-form form .input label{color:#000;font-size:14px;font-weight:400}.login-admin .login-content .login-form form .input input{border:1px solid #aeaeae;border-radius:5px;color:#000;font-size:16px;height:50px;outline:none;padding-left:15px;padding-right:30px;width:100%}.login-admin .login-content .login-form form .input button{background-color:initial;border:none;font-size:20px;outline:none;position:absolute;right:15px;top:53px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-admin .login-content .login-form form>button{background-color:#5fbb4f;border:none;border-radius:6px;color:#fff;font-size:15px;height:50px;margin-top:10px;outline:none;transition:.5s;width:100%}.login-admin .login-content .login-form form>button:hover{background-color:#418735}.login-admin .login-content .login-form form>a{color:#000;font-size:15px;font-weight:400;margin-top:26px}.login-admin .login-content .err-msg{align-items:center;background-color:#ff00001f;border:1px solid #de0000;border-radius:6px;color:#de0000;display:flex;display:none;flex-direction:row;height:55px;justify-content:flex-start;margin-bottom:19px;padding:15px;transition:.5s}.login-admin .login-content .err-msg.active{display:block}@media(max-width:950px){.login-admin .login-content{background-color:#fff;border:1px solid #0000001f;border-radius:10px;left:50%;min-height:600px;padding:25px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:99%}}.login-admin .login-content .user-check-pin{width:100%}.login-admin .login-content .user-check-pin button{background-color:#5fbb4f;border:none;border-radius:6px;color:#fff;font-size:15px;height:50px;margin-top:10px;outline:none;transition:.5s;width:100%}.login-admin .login-content .user-check-pin button:hover{background-color:#418735}.login-form .news-content{background-color:#3f51b533;border:1px solid #3f51b578;border-radius:5px;padding:15px;width:100%}.login-form .news-content h3{color:#000;font-size:19px;font-weight:600}.login-form .news-content>div{display:flex;flex-direction:column;gap:8px;padding:30px}.login-form .news-content>div h4{display:list-item;font-size:16px}nav{background-color:#f7f7f7}nav .nav-content .logo{padding:15px}nav .nav-content .logo img{height:100px;object-fit:contain;width:200px}nav .nav-content .logo h1{color:#000;font-size:21px;font-weight:500}nav .nav-content .nav-eles{align-items:center;background-color:#333;border-radius:3px;display:flex;flex-direction:row;gap:30px;height:40px;justify-content:flex-end;padding:18px}nav .nav-content .nav-eles li a{color:#fff;font-size:13px;text-transform:uppercase;transition:.5s}nav .nav-content .nav-eles li a:hover{color:#62bb47}nav .nav-content .last-login{align-items:center;background-color:#333;border-radius:4px;display:flex;flex-direction:row;gap:30px;justify-content:flex-end;margin-top:2px}nav .nav-content .last-login h2{color:#fff;font-size:15px;font-weight:400;margin:0;padding:10px}@media(max-width:950px){nav .nav-content .last-login{align-items:flex-start;background-color:#333;border-radius:4px;display:flex;flex-direction:column;gap:5px;justify-content:flex-end;margin-top:2px;padding-bottom:10px;padding-top:10px}nav .nav-content .last-login h2{color:#fff;font-size:14px;font-weight:400;margin:0;padding:0 7px}nav .nav-content .logo img{height:43px;object-fit:contain;width:200px}}#open-nav{color:#000;left:50%;position:relative;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#close-nav,#open-nav{background-color:initial;border:none;display:none;font-size:31px;outline:none}#close-nav{color:#fff}@media(max-width:950px){#close-nav,#open-nav{display:block}nav .nav-content .nav-eles{background-color:#333;bottom:0;gap:35px;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:15015}nav .nav-content .nav-eles,nav .nav-content .nav-eles ul{align-items:center;display:flex;flex-direction:column;justify-content:center}nav .nav-content .nav-eles ul{gap:40px;margin:0!important;padding:0}nav .nav-content .contact-links,nav .nav-content .nav-eles{display:none}nav .nav-content .nav-eles ul li a{color:#000;font-size:17px;font-weight:500}nav .nav-content .logo{align-items:center;display:flex;flex-direction:row;gap:30px;justify-content:space-between;width:100%}}.form-inputs .section-header h1{border-bottom:2px solid #333;color:#333;font-size:20px;font-weight:500;margin-bottom:30px;margin-top:30px;padding-bottom:30px}.form-inputs .form-inputs-content{background-color:#fff;border:1px solid #0000001f;border-radius:10px;left:50%;margin-bottom:40px;padding:25px;position:relative;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:47%}.form-inputs .form-inputs-content form h1{align-items:center;border-bottom:1px solid #00000057;color:#9b9b9b;display:flex;flex-direction:row;font-size:17px;font-weight:400;gap:15px;margin-bottom:40px;padding-bottom:20px}.form-inputs .form-inputs-content form .input{align-items:flex-start;display:flex;flex-direction:column;gap:5px;margin-bottom:44px;position:relative;width:100%}.form-inputs .form-inputs-content form .input label{color:#000;font-size:14px;font-weight:400}.form-inputs .form-inputs-content form .input input{border:1px solid #aeaeae;border-radius:5px;color:#000;font-size:16px;height:50px;outline:none;padding-left:15px;padding-right:30px;width:100%}.form-inputs .form-inputs-content form .input input[type=file]{padding-top:10px}.form-inputs .form-inputs-content form .input select{border:1px solid #aeaeae;border-radius:5px;color:#000;font-size:16px;height:50px;outline:none;padding-left:15px;padding-right:30px;width:100%}.form-inputs .form-inputs-content form .student-photo{align-items:center;display:flex;flex-direction:row;justify-content:center}.form-inputs .form-inputs-content form .student-photo img{height:200px;object-fit:contain;width:200px}.form-inputs .form-inputs-content form .input textarea{border:1px solid #aeaeae;border-radius:5px;color:#000;font-size:16px;height:150px;outline:none;padding-left:15px;padding-right:30px;width:100%}.form-inputs .form-inputs-content form button{background-color:#333;border:none;border-radius:6px;color:#fff;font-size:15px;height:50px;margin-top:10px;opacity:1;outline:none;transition:.5s;width:100%}.form-inputs .form-inputs-content form button:hover{opacity:.8}.all-data-table{background-color:#fff;border:1px solid #0000001f;border-radius:10px;margin-bottom:40px;padding:25px;position:relative}.all-data-table>h1{align-items:center;border-bottom:1px solid #00000057;color:#9b9b9b;display:flex;flex-direction:row;font-size:17px;font-weight:400;gap:15px;margin-bottom:40px;padding-bottom:20px}.all-data-table .table-content{overflow-x:scroll;width:100%}.all-data-table .table-content table{width:1500px}.all-data-table .table-content table tr{border-bottom:1px solid #0000001f}.all-data-table .table-content table th h1{color:#000;font-size:16px;font-weight:500}.all-data-table .table-content table td h2{color:#737373;font-size:15px;font-weight:400;margin-bottom:23px;margin-top:20px}.all-data-table .table-content table td button{align-items:center;background-color:#d90101;border:none;border-radius:4px;color:#fff;display:flex;flex-direction:row;gap:6px;height:36px;justify-content:center;outline:none;transition:.5s;width:100px}.all-data-table .table-content table td button:hover{background-color:#980404}.all-data-table .table-content table td button.print-record{background-color:#3f51b5}.all-data-table .table-content table td button.print-record:hover{background-color:#2b3675}.all-data-table .table-content table td{width:300px}.all-data-table .table-content table td div{display:flex;flex-direction:row;gap:11px}.all-data-table .table-content table td a{align-items:center;background-color:#3f51b5;border:none;border-radius:4px;color:#fff;display:flex;flex-direction:row;gap:6px;height:36px;justify-content:center;outline:none;transition:.5s;width:100px}.all-data-table .table-content table td a:hover{background-color:#2b3675}.all-data-table .table-content>div{align-items:center;display:flex;flex-direction:row;gap:15px;margin-bottom:30px}.all-data-table .table-content>div button{align-items:center;border:none;border-radius:4px;color:#fff;display:flex;flex-direction:row;gap:6px;height:36px;justify-content:center;outline:none;transition:.5s;width:100px}.all-data-table .table-content>div button:first-child{background-color:#3f51b5}.all-data-table .table-content>div button:nth-child(2){background-color:#d90101}@media print{nav{background-color:#f7f7f7;display:none}.form-inputs .section-header h1{border-bottom:2px solid #333;color:#333;display:none;font-size:20px;font-weight:500;margin-bottom:30px;margin-top:30px;padding-bottom:30px}.all-data-table>h1{border-bottom:1px solid #00000057;color:#9b9b9b;font-size:17px;font-weight:400;margin-bottom:40px;padding-bottom:20px}.all-data-table .table-content>div,.all-data-table>h1{align-items:center;display:flex;display:none;flex-direction:row;gap:15px}.all-data-table .table-content>div{margin-bottom:30px}.all-data-table .table-content table td div{display:flex;display:none;flex-direction:row;gap:11px}.all-data-table .table-content table td{width:0}.download-as-pdf-record,.download-as-pdf-table-content,.print-all-table,.print-record{display:none}.all-data-table .table-content table{width:100%}}@media(max-width:950px){.form-inputs .form-inputs-content{background-color:#fff;border:1px solid #0000001f;border-radius:10px;left:50%;margin-bottom:40px;padding:25px;position:relative;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%}}.home-page .state{align-items:center;background-color:#fff;border:1px solid #0000002b;border-radius:7px;display:flex;flex-direction:column;height:200px;justify-content:center;margin-bottom:25px;margin-top:25px}.home-page .state>div{gap:17px}.home-page .state>div,.home-page .state>div i{align-items:center;display:flex;flex-direction:row;justify-content:center}.home-page .state>div i{background-color:#3f51b5;border-radius:50%;color:#fff;font-size:34px;height:70px;width:70px}.home-page .state>div h1{color:#000;font-size:40px;font-weight:600}.home-page .state h2{color:#9b9b9b;font-size:20px;font-weight:500;font-weight:400;margin-top:16px}.home-page .news-content{background-color:#3f51b533;border:1px solid #3f51b578;border-radius:5px;margin-bottom:15px;margin-top:15px;padding:15px;width:100%}.home-page .news-content h3{color:#000;font-size:19px;font-weight:600}.home-page .news-content>div{display:flex;flex-direction:column;gap:8px;padding:30px}.home-page .news-content>div h4{display:list-item;font-size:16px}
/*# sourceMappingURL=main.a4d2bcb6.css.map*/
```

### JacaScript Packeg : 
```

{
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon server.js",
        "build": "react-scripts build"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "axios": "^1.4.0",
        "bcrypt": "^5.1.0",
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.2",
        "compression": "^1.7.4",
        "cookie-parser": "^1.4.6",
        "cors": "^2.8.5",
        "crypto-js": "^4.2.0",
        "express": "^4.18.2",
        "express-mysql-session": "^3.0.0",
        "express-session": "^1.17.3",
        "fs": "0.0.1-security",
        "gm": "^1.25.0",
        "jimp": "^0.22.8",
        "multer": "^1.4.5-lts.1",
        "mysql": "^2.18.1",
        "mysql2": "^3.4.3",
        "nodemailer": "^6.9.3",
        "nodemon": "^2.0.22",
        "rimraf": "^5.0.1",
        "sharp": "^0.32.6",
        "ssh2": "^1.14.0",
        "xlsx": "^0.18.5"
    }
}
```

### JacaScript User : 
```
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const axios = require( "axios");
const multer = require('multer');
const path = require('path');
const Jimp = require('jimp');
const nodemailer = require('nodemailer');
const CryptoJS = require('crypto-js');
const sharp = require('sharp');
const fs = require('fs');


const app = express();




app.use(cors({
    origin: ["https://regismart.site/", "https://www.regismart.site/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
    }));


// app.use(cors({
//     origin : ["http://localhost:3000"],
//     methods: ["POST", "GET","DELETE","PUT"],
//     credentials: true
// }));


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('trust proxy', 1);


axios.default.withCredentials = true;


// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//     secure: true,
//     maxAge: 1000 * 60 * 60 * 24,
//     sameSite: 'none' // Add this option if you're using cross-site requests
//     }
// }));



app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
    }
}));


//connection to database


// const con = mysql.createConnection({
// user: 'root',
// host: 'localhost',
// password: '',
// database: 'regismart',
// });



const con = mysql.createConnection({
    user: 'regidyit_regismart',
    host: 'localhost',
    password: 'regismart1973***',
    database: 'regidyit_regismart',
    });



con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + con.threadId);
});




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '../public_html/uploads/'));
    },
    filename: function (req, file, cb) {
    const timestamp = Date.now();
    const fileExt = file.originalname.split('.').pop();
    const fileName = timestamp + '.' + fileExt;
    cb(null, fileName);
    },
});



const upload = multer({
    dest: path.join(__dirname, '..', '../public_html/uploads/'),
    storage: storage,
    fileFilter: function (req, file, cb) {
        const fileTypes = /jpeg|jpg|png|gif|mp3|wav|mpeg|audio|xlsx|xls|webp|pdf|docx/; // Added 'webp' here
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb('Error: Only Images, Audio, Excel, and WebP files are allowed!');
        }
    },
});



const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '../public_html/uploads/videos/'));
    },
    filename: function (req, file, cb) {
    const timestamp = Date.now();
    const fileExt = file.originalname.split('.').pop();
    const fileName = timestamp + '.' + fileExt;
    cb(null, fileName);
    },
});


const videoUpload = multer({
    storage: videoStorage,
    fileFilter: function (req, file, cb) {
        const fileTypes = /mp4|avi|mov|wmv/; // Allowed video file types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb('Error: Only MP4, AVI, MOV, and WMV video files are allowed!');
        }
    },
}).single('video');



function cropImage(imagePath, cb) {
    const outputPath = imagePath.replace(/(\.[\w\d_-]+)$/i, '-thumbnail$1');
    const maxWidth = 700; // Maximum width value

    sharp(imagePath)
        .resize({ width: maxWidth }) // Sharp automatically maintains aspect ratio
        .toFile(outputPath, (err, info) => {
            if (err) {
                return cb(err);
            }
            return cb(null, outputPath);
        });
}






app.delete('/delete-item/:id', (req, res) => {
    const itemId = req.params.id;
    const table = req.body.table;
    
    // execute the query to delete the item
    con.query(`SELECT * FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
    if (err) {
        console.error('Error deleting item:', err);
        return res.send({ message: 'Error deleting item' });
    }
    if (result.length === 0) {
        return res.send({ message: 'Item not found' });
    }

    con.query(`DELETE FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
        if (err) {
        console.error('Error deleting the item:', err);
        return res.send({ message: 'Error deleting the item' });
        }
        console.log('Item deleted successfully');
        return res.send({ message: 'Item deleted successfully' });
    });
    });




});




app.delete('/delete-student/:id', (req, res) => {
    const itemId = req.params.id;
    const table = req.body.table;
    
    // execute the query to delete the item
    con.query(`SELECT * FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
    if (err) {
        console.error('Error deleting item:', err);
        return res.send({ message: 'Error deleting item' });
    }
    if (result.length === 0) {
        return res.send({ message: 'Item not found' });
    }

    con.query(`DELETE FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
        if (err) {
        console.error('Error deleting the item:', err);
        return res.send({ message: 'Error deleting the item' });
        }
        console.log('Item deleted successfully');
        return res.send({ message: 'Item deleted successfully' });
    });
    });




});

app.get('/session-student', (req, res) => {
    if(req.session.studentRegNo) {
        return res.json({valid: true, studentRegNo: req.session.studentRegNo,studentName : req.session.studentName,type : req.session.type})
    } else {
        return res.json({valid: false})
    }
});



app.get('/session-admin', (req, res) => {
    if(req.session.username) {
        return res.json({valid: true, username: req.session.email,userId : req.session.userId,type : req.session.type})
    } else {
        return res.json({valid: false})
    }
});




app.post('/user', (req, res) => {
    const userId = req.body.id;

    con.query("SELECT * FROM admins WHERE id = ?", [userId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting user' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        } else {
        res.send({ message: 'User not found' });

        }
    }
    });
});



app.post('/get-item', (req, res) => {
    const itemId = req.body.itemId;
    const table = req.body.table;

    con.query(`SELECT * FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting item' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        }
        else {
        res.send({ message: 'item not found' });

        }
    }
    });
});




app.post('/get-student', (req, res) => {
    const itemId = req.body.itemId;

    const table = "student";

    con.query(`SELECT * FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting item' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        }
        else {
        res.send({ message: 'item not found' });

        }
    }
    });
});





app.get('/logoutStudent', (req, res) => {
    if (req.session.studentRegNo) {
        res.header('Cache-control', 'no-cashe');
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            } else {
                return res.send({logout: true});
            }
        });
    }
});



app.get('/logoutAdmin', (req, res) => {
    if (req.session.username) {
        res.header('Cache-control', 'no-cashe');
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            } else {
                return res.send({logout: true});
            }
        });
    }
});





    app.post('/get-item-count', (req, res) => {
        const table = req.body.table;

            con.query(`SELECT COUNT(*) AS totalCount FROM ${table}`,
                (err, result) => {
                    if (result) {
                        const totalCount = result[0].totalCount;
                        res.status(200).json({ totalCount });
                        res.send(totalCount);
                    } else {
                        res.send({ err, message: "Enter Correct asked details" });
                    }
                }
            )
                
                
    });



    
    app.post('/AllItems', (req, res) => {
        const table = req.body.table;
    
        con.query(`SELECT * FROM ${table} ORDER BY id DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });



    

    
    app.post('/AllUserEnrolls', (req, res) => {
        const table = req.body.table;
        const studentId = req.body.studentId;

    
        con.query(`SELECT * FROM ${table} WHERE student_reg_no = ${studentId} ORDER BY id DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });




    app.post('/AllStudents', (req, res) => {
        const table = req.body.table;
    
        con.query(`SELECT * FROM ${table} ORDER BY student_reg_no DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });





    // Start Student Login Function V1


    app.post('/login', async (req, res) => {
        const { reg_number, password, pincode } = req.body; // Extract pincode from the request body
        const userIp = req.ip; // Assuming you're getting the IP address directly from req.ip


        // Check for user existence and account status
        con.query('SELECT * FROM student WHERE student_reg_no = ?', [reg_number], async (err, users) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send({ message: 'An error occurred. Please try again later.' });
            }
    
            if (users.length === 0) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login attempt due to user not found
                return res.status(404).send({ message: 'User not found.' });
            }
    
            const user = users[0];
    
            // Verify password
            const LoginPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
            const passwordMatch = LoginPassword ===  user.password;


            if (!passwordMatch) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login due to incorrect password
                return res.status(401).send({ message: 'Password is incorrect.' });
            }
            
            if (user.pincode !== pincode) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login due to incorrect pincode
                return res.status(401).send({ message: 'Pincode is incorrect.' });
            }
    
            // If both password and pincode are correct, setup session details and log success
            req.session.studentRegNo = user.student_reg_no;
            req.session.studentName = user.student_name;
            req.session.type = 'student';
    
            logUserLoginAttempt(reg_number, userIp, 1); // Log successful login attempt
            
            res.send({ message: 'Login successful' });
        });
    });
    
    // Helper function to log login attempts
    function logUserLoginAttempt(studentRegNo, userIp, status) {
        const insertLogQuery = "INSERT INTO userlog (student_reg_no, user_ip, login_time, status) VALUES (?, ?, NOW(), ?)";
        con.query(insertLogQuery, [studentRegNo, userIp, status], (err, result) => {
            if (err) {
                console.error('Error logging user login attempt:', err);
                // Note: You might not want to send an error to the client in this case as it pertains to logging, not the primary function of the endpoint.
            }
        });
    }


    // End Student Login Function V1







    // Start Course enroll for the student Function V2

    app.post("/add-course-enroll-student", upload.none(), (req, res) => {
        const { student_reg_no, pincode, session, department, level, semester, course } = req.body;

    
        if (!student_reg_no || !pincode || !session || !department || !level || !semester || !course) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, check the course availability
        const courseQuery = "SELECT no_of_seats FROM course WHERE id = ?";
        con.query(courseQuery, [course], (err, courseResult) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (courseResult.length === 0) {
                return res.status(404).send({ message: "Course not found" });
            }
    
            const availableSeats = courseResult[0].no_of_seats;
            if (availableSeats <= 0) {
                return res.status(400).send({ message: "Limits of seats exceeded, please choose another course" });
            }
    
            // If no_of_seats are available, decrement the number of no_of_seats by one and increment no_of_student
            const updateSeatsQuery = "UPDATE course SET no_of_seats = no_of_seats - 1, no_of_student = no_of_student + 1 WHERE id = ?";
            con.query(updateSeatsQuery, [course], (err, updateResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Error updating course details" });
                }
    
                // Now, add the enrollment with creation_date
                const insertQuery = "INSERT INTO course_enrolls (student_reg_no, pincode, session, department, level, semester, course, enroll_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";
                const values = [student_reg_no, pincode, session, department, level, semester, course];
    
                con.query(insertQuery, values, (err, enrollResult) => {
                    if (err) {
                        console.error(err);
                        // If inserting enrollment fails, roll back the seat decrement and no_of_student increment
                        const rollbackQuery = "UPDATE course SET no_of_seats = no_of_seats + 1, no_of_student = no_of_student - 1 WHERE id = ?";
                        con.query(rollbackQuery, [course], (rollbackErr, rollbackResult) => {
                            if (rollbackErr) {
                                console.error(rollbackErr);
                            }
                            return res.status(500).send({ message: "Server error, could not enroll and course update rollback attempted" });
                        });
                    } else {
                        return res.status(200).send({ message: "Enrolled successfully" });
                    }
                });
            });
        });
    });


    // End Course enroll for the student Function V1







    // Start Update Student info function V1






    app.post("/update-student-info", upload.single("img"), (req, res) => {
        const { student_reg_no, student_name } = req.body;
        console.log(req.body)
        const file = req.file;
    
        if (!student_name) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        if (student_reg_no) {
            const updateFields = [];
            const values = [];
    
            if (student_name) {
                updateFields.push("student_name = ?");
                values.push(student_name);
            }
    
            // Add updation_date to the fields to be updated
            updateFields.push("updation_date = NOW()");
    
            if (file) {
                const imagePath = file.path;
    
                cropImage(imagePath, function (err, imagePathThumbnail) {
                    if (err) {
                        console.log(err);
                        return res.send({ message: "Error uploading image" });
                    } else {
                        updateFields.push("student_photo = ?");
                        values.push(imagePathThumbnail.replace(/^.*[\\\/]/, ""));
    
                        const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
                        values.push(student_reg_no);
    
                        con.query(updateQuery, values, (err, result) => {
                            if (err) {
                                console.error(err);
                                return res.status(500).send({ message: "Server error" });
                            }
    
                            return res.status(200).send({ message: "Student information updated successfully" });
                        });
                    }
                });
            } else {
                // Proceed with the update if no image file is present
                const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
                values.push(student_reg_no);
    
                con.query(updateQuery, values, (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({ message: "Server error" });
                    }
    
                    return res.status(200).send({ message: "Student information updated successfully" });
                });
            }
        } 
    });



    // End Update Student info function V1





    // Start Update Student Password Function V1



    app.post("/update-student-password", upload.none(), (req, res) => {
        const { student_reg_no, current_password, new_password } = req.body; // Added new_password and current_password to the body extraction
    
        if (!student_reg_no || !current_password || !new_password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, fetch the current password from the database to compare
        const fetchPasswordQuery = "SELECT password FROM student WHERE student_reg_no = ?";
        con.query(fetchPasswordQuery, [student_reg_no], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (result.length === 0) {
                return res.status(404).send({ message: "Student not found" });
            }
    
            // Hash the current_password provided by the user to compare with the stored hash

            const currentPasswordHash = CryptoJS.SHA1(current_password).toString(CryptoJS.enc.Hex);    

    
            if (result[0].password !== currentPasswordHash) {
                return res.status(401).send({ message: "Current password is incorrect" });
            }
    
            // If the current password is correct, hash the new_password and update it in the database
            const newPasswordHash = CryptoJS.SHA1(new_password).toString(CryptoJS.enc.Hex);    

            const updatePasswordQuery = "UPDATE student SET password = ?, updation_date = NOW() WHERE student_reg_no = ?";
            con.query(updatePasswordQuery, [newPasswordHash, student_reg_no], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error(updateErr);
                    return res.status(500).send({ message: "Error updating password" });
                }
    
                return res.status(200).send({ message: "Password updated successfully" });
            });
        });
    });










    // End Update Student Password Function V1





    // Start Admin Login Function V1


    app.post('/admin-login', async (req, res) => {
        const { username, password} = req.body; 
    
        // Check for user existence and account status
        con.query('SELECT * FROM admin WHERE username = ?', [username], async (err, users) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send({ message: 'An error occurred. Please try again later.' });
            }
    
            if (users.length === 0) {
                return res.status(404).send({ message: 'User not found.' });
            }
    
            const user = users[0];
    
            // Verify password

            const LoginPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
            const passwordMatch = LoginPassword ===  user.password;
            
            if (!passwordMatch) {
                return res.status(401).send({ message: 'Password is incorrect.' });
            }

    
            // If both password and pincode are correct, setup session details
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.type = 'admin'; // Assuming this is a static value for demonstration
    
            res.send({ message: 'Login successful' });
        });
    });
    
    // End Admin Login Function V1




    // Start Session Addition Function V1


    app.post("/add-course-session", upload.none(), (req, res) => {
        const {  session } = req.body;
    
        const file = req.file;
    
        if (!session) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO session ( session,creation_date) VALUES (?,NOW())";
        const values = [ session];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Session added successfully" });
            
        });
    });


    // End Session Addition Function V1





    
    // Start Semester Addition Function V1


    app.post("/add-semester", upload.none(), (req, res) => {
        const {  semester } = req.body;
    
        const file = req.file;
    
        if (!semester) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO semester ( semester,creation_date) VALUES (?,NOW())";
        const values = [ semester];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Semester added successfully" });
            
        });
    });


    // End Semester Addition Function V1




    
    // Start Department Addition Function V1


    app.post("/add-department", upload.none(), (req, res) => {
        const {  department } = req.body;
    
        const file = req.file;
    
        if (!department) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO department ( department,creation_date) VALUES (?,NOW())";
        const values = [ department];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Semester added successfully" });
            
        });
    });


    // End Department Addition Function V1




    
    // Start Course Addition Function V1

    app.post("/add-course", upload.none(), (req, res) => {
        const {  course_code, course_name, course_unit, no_of_seats } = req.body;
    
        const file = req.file;
    
        if (!course_code || !course_name || !course_unit || !no_of_seats) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO course ( course_code,course_name,course_unit,no_of_seats,creation_date) VALUES (?,?,?,?,NOW())";
        const values = [ course_code, course_name, course_unit, no_of_seats];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Course added successfully" });
            
        });
    });


    // End Course Addition Function V1





    // Start Course Update Function V1


    app.post("/update-course", upload.none(), (req, res) => {
        const { id, course_code, course_name, course_unit, no_of_seats } = req.body;
    
        if (!id || !course_code || !course_name || !course_unit || !no_of_seats) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        const updateFields = [];
        const values = [];
    
        if (course_code) {
            updateFields.push("course_code = ?");
            values.push(course_code);
        }
    
        if (course_name) {
            updateFields.push("course_name = ?");
            values.push(course_name);
        }
    
        if (course_unit) {
            updateFields.push("course_unit = ?");
            values.push(course_unit);
        }
    
        if (no_of_seats) {
            updateFields.push("no_of_seats = ?");
            values.push(no_of_seats);
        }
    
        // Add updation_date to the fields to be updated with the current date and time
        updateFields.push("updation_date = NOW()");
    
        const updateQuery = `UPDATE course SET ${updateFields.join(', ')} WHERE id = ?`;
        values.push(id);
    
        con.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            return res.status(200).send({ message: "Course updated successfully" });
        });
    });



    // End Course Update Function V1




    
    // Start Student Addition Function V1


    app.post("/add-student", upload.none(), async (req, res) => {
        const { student_name, student_reg_no, password } = req.body;
    
        if (!student_name || !student_reg_no || !password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // Hash the password using SHA1
        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
        // Function to generate a unique 5-digit pincode
        const generateUniquePincode = async () => {
            let unique = false;
            let pincode;
            while (!unique) {
                pincode = Math.floor(10000 + Math.random() * 90000).toString(); // Generate a 5-digit random number
                const pincodeCheckQuery = "SELECT COUNT(*) AS count FROM student WHERE pincode = ?";
        
                try {
                    // Wrap the query in a new Promise
                    const pincodeCheckResult = await new Promise((resolve, reject) => {
                        con.query(pincodeCheckQuery, [pincode], (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
        
                    // Check if the generated pincode is unique
                    unique = pincodeCheckResult[0].count === 0;
                } catch (err) {
                    console.error('Error querying the database:', err);
                    throw err; // Rethrow or handle the error appropriately
                }
            }
            return pincode;
        };



        // Ensure pincode is unique before proceeding
        generateUniquePincode().then(uniquePincode => {
            const insertQuery = "INSERT INTO student (student_name, student_reg_no, password, pincode, creation_date) VALUES (?, ?, ?, ?, NOW())";
            const values = [student_name, student_reg_no, hashedPassword, uniquePincode];
    
            con.query(insertQuery, values, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Server error" });
                }
                return res.status(200).send({ message: "Student added successfully" });
            });
        }).catch(err => {
            console.error(err);
            return res.status(500).send({ message: "Error generating unique pincode" });
        });
    });



    // End Student Addition Function V1








        // Start User Update Function V1


        app.post("/update-user", upload.none(), (req, res) => {
            const { student_reg_no, student_name, password } = req.body;

        
            if (!student_reg_no || !student_name) {
                return res.status(400).send({ message: "All fields are required" });
            }
        
            const updateFields = [];
            const values = [];
        
            if (student_name) {
                updateFields.push("student_name = ?");
                values.push(student_name);
            }
            // Hash the password using SHA1 before updating
            if (password) {
                        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
                        updateFields.push("password = ?");
                values.push(hashedPassword); // Use the hashed password
            }
        
            // Add updation_date to the fields to be updated with the current date and time
            updateFields.push("updation_date = NOW()");
        
            const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
            values.push(student_reg_no);
        
            con.query(updateQuery, values, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Server error" });
                }
        
                return res.status(200).send({ message: "Student updated successfully" });
            });
        });
    
    
        // End User Update Function V1






    
    // Start Update Admin Password Function V1



    app.post("/update-admin-password", upload.none(), (req, res) => {
        const { id, current_password, new_password } = req.body; // Added new_password and current_password to the body extraction
    
        if (!id || !current_password || !new_password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, fetch the current password from the database to compare
        const fetchPasswordQuery = "SELECT password FROM admin WHERE id = ?";
        con.query(fetchPasswordQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (result.length === 0) {
                return res.status(404).send({ message: "Student not found" });
            }
    
            // Hash the current_password provided by the user to compare with the stored hash
            const currentPasswordHash = CryptoJS.SHA1(current_password).toString(CryptoJS.enc.Hex);    

            if (result[0].password !== currentPasswordHash) {
                return res.status(401).send({ message: "Current password is incorrect" });
            }
    
            // If the current password is correct, hash the new_password and update it in the database

            const newPasswordHash = CryptoJS.SHA1(new_password).toString(CryptoJS.enc.Hex);    


            const updatePasswordQuery = "UPDATE admin SET password = ?, updation_date = NOW() WHERE id = ?";
            con.query(updatePasswordQuery, [newPasswordHash, id], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error(updateErr);
                    return res.status(500).send({ message: "Error updating password" });
                }
    
                return res.status(200).send({ message: "Password updated successfully" });
            });
        });
    });




    // End Update Admin Password Function V1





    // Start Add News Function V1


    app.post("/add-news", upload.none(), (req, res) => {
        const {  news_title, news_description } = req.body;
    
        const file = req.file;
    
        if (!news_title || !news_description) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO news (  news_title, news_description , posting_date ) VALUES (?,?,NOW())";
        const values = [ news_title, news_description];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "News added successfully" });
            
        });
    });



    // End Add News Function V1



module.exports = app;
```

### JacaScript Admin login : 
```
import React, { useState,useEffect } from 'react';
import axios from '../config/index';
import './css/adminlogin.css';
import Logo from './images/logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function AdminLogin(){



    

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    navigate('/admin-home-page');

                } 
            } catch (error) {
                console.error('Error fetching session data:', error);
                navigate('/'); // Navigate on error as well
            }
        };

        fetchSessionData();
    }, []); 



    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate(); // useNavigate hook for navigation after login

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin-login', credentials);
            if (response.data.message) {
                // Assuming you have a route to navigate to upon successful login
                navigate('/admin-home-page');
            }
        } catch (error) {
            if (error.response) {
                // Displaying error message from the server response
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };


        

    return(
        <div className="login-admin">
            <div className="container-fluid">
                <div className="login-content">

                {error && <div className='err-msg'><h2>{error}</h2></div>}




                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                        <div>
                            <h1> Online Course Registration  <i class="las la-user-plus"></i> </h1>  
                            <h2> Admin Login </h2>
                        </div>
                    </div>

                    <div className="login-form">
                    <form onSubmit={handleSubmit}>
                    <div className="input">
                            <label> Username </label>
                            <input type="text" required name="username" value={credentials.username} onChange={handleChange} />
                        </div>

                        <div className="input">
                            <label> Password </label>
                            <input type={passwordShown ? "text" : "password"} required name="password" value={credentials.password} onChange={handleChange} />
                            <button type="button" className="show-password" onClick={togglePasswordVisibility}>
                                {passwordShown ? <i className="las la-eye-slash"></i> : <i className="las la-eye active"></i>}
                            </button>
                        </div>



                                <button type="submit">Log in as admin</button>

                                <RouterLink to="/"> Login as user  </RouterLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AdminLogin;
```

### MYSQL DB :
```
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 11:53 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `regismart`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updation_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `creation_date`, `updation_date`) VALUES
(1, 'admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2024-03-14 16:48:33', '2024-03-08 19:08:22');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `course_code` varchar(255) DEFAULT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `course_unit` varchar(255) DEFAULT NULL,
  `no_of_seats` int(11) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT current_timestamp(),
  `updation_date` varchar(255) DEFAULT NULL,
  `no_of_student` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `course_code`, `course_name`, `course_unit`, `no_of_seats`, `creation_date`, `updation_date`, `no_of_student`) VALUES
(1, 'PHP_16', 'PHP', '1.5', 146, '2024-03-08 13:53:07', '2024-03-08 16:02:54', 3),
(2, 'jkhasf', 'dawd', '4', 653, '2024-03-23 19:40:33', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `course_enrolls`
--

CREATE TABLE `course_enrolls` (
  `id` int(11) NOT NULL,
  `student_reg_no` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `session` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `course` int(11) DEFAULT NULL,
  `enroll_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_enrolls`
--

INSERT INTO `course_enrolls` (`id`, `student_reg_no`, `pincode`, `session`, `department`, `level`, `semester`, `course`, `enroll_date`) VALUES
(1, '123456', '95483', '2020', '0', '0', '0', 1, '2024-03-08 15:16:07'),
(2, '123456', '95483', '2020', 'department 2', 'Level 2', 'sec sem', 1, '2024-03-08 18:55:55'),
(3, '123456', '95483', '2020', 'department 2', 'Level 2', 'sec sem', 1, '2024-03-08 19:01:57'),
(4, '123456', '95483', '2020', 'department 2', 'Level 2', 'sec sem', 2, '2024-03-23 19:45:21');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `department` varchar(255) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department`, `creation_date`) VALUES
(2, 'department 2', '2024-03-08 13:42:15');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` varchar(255) DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `news_title` varchar(255) DEFAULT NULL,
  `news_description` mediumtext DEFAULT NULL,
  `posting_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `news_title`, `news_description`, `posting_date`) VALUES
(2, 'news test', 'news test news test', '2024-03-08 17:16:38');

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

CREATE TABLE `semester` (
  `id` int(11) NOT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT current_timestamp(),
  `updation_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`id`, `semester`, `creation_date`, `updation_date`) VALUES
(2, 'sec sem', '2024-03-08 13:40:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `session` varchar(255) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `session`, `creation_date`) VALUES
(1, '2020', '2024-03-08 13:34:59');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_reg_no` varchar(255) NOT NULL,
  `student_photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `cgpa` decimal(10,2) DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updation_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_reg_no`, `student_photo`, `password`, `student_name`, `pincode`, `cgpa`, `creation_date`, `updation_date`) VALUES
('123456', '1709914598114-thumbnail.png', '20eabe5d64b0e216796e834f52d61fd0b70332fc', 'elsawy', '95483', NULL, '2024-03-08 12:48:42', '2024-03-08 18:22:37');

-- --------------------------------------------------------

--
-- Table structure for table `userlog`
--

CREATE TABLE `userlog` (
  `id` int(11) NOT NULL,
  `student_reg_no` varchar(255) DEFAULT NULL,
  `user_ip` binary(16) DEFAULT NULL,
  `login_time` timestamp NULL DEFAULT current_timestamp(),
  `logout` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userlog`
--

INSERT INTO `userlog` (`id`, `student_reg_no`, `user_ip`, `login_time`, `logout`, `status`) VALUES
(14, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:14:30', NULL, 0),
(15, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:15:16', NULL, 0),
(16, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:16:07', NULL, 0),
(17, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:17:10', NULL, 0),
(18, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:17:11', NULL, 0),
(19, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:17:24', NULL, 0),
(20, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:17:37', NULL, 0),
(21, '', 0x3a3a3100000000000000000000000000, '2024-03-08 14:18:23', NULL, 0),
(22, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:20:23', NULL, 0),
(23, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:24:30', NULL, 0),
(24, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:24:33', NULL, 0),
(25, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:25:18', NULL, 0),
(26, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:28:33', NULL, 1),
(27, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:32:48', NULL, 1),
(28, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 14:51:05', NULL, 1),
(29, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:13:06', NULL, 1),
(30, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:14:56', NULL, 1),
(31, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:15:56', NULL, 1),
(32, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:17:18', NULL, 1),
(33, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:32:28', NULL, 1),
(34, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 15:44:11', NULL, 1),
(35, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:11:34', NULL, 1),
(36, '123456', 0x3a3a666666663a3132372e302e302e31, '2024-03-08 16:12:52', NULL, 0),
(37, '123456', 0x3a3a666666663a3132372e302e302e31, '2024-03-08 16:12:54', NULL, 1),
(38, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:13:54', NULL, 1),
(39, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:15:05', NULL, 1),
(40, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:16:22', NULL, 1),
(41, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:21:36', NULL, 1),
(42, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:22:19', NULL, 1),
(43, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:22:50', NULL, 1),
(44, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:33:02', NULL, 0),
(45, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:33:15', NULL, 1),
(46, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:34:33', NULL, 0),
(47, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:34:46', NULL, 1),
(48, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:36:46', NULL, 0),
(49, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 16:37:01', NULL, 1),
(50, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 18:55:22', NULL, 1),
(51, '123456', 0x3a3a3100000000000000000000000000, '2024-03-08 19:06:19', NULL, 1),
(52, '123456', 0x3a3a3100000000000000000000000000, '2024-03-19 08:57:36', NULL, 1),
(53, '123456', 0x3a3a3100000000000000000000000000, '2024-03-19 08:59:18', NULL, 1),
(54, '123456', 0x3a3a3100000000000000000000000000, '2024-03-23 19:39:39', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_enrolls`
--
ALTER TABLE `course_enrolls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_reg_no`);

--
-- Indexes for table `userlog`
--
ALTER TABLE `userlog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course_enrolls`
--
ALTER TABLE `course_enrolls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `semester`
--
ALTER TABLE `semester`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userlog`
--
ALTER TABLE `userlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```
### HOSTING & DOMAIN 

[namecheap](https://www.namecheap.com/hosting/) - Namecheap is an ICANN-accredited domain name registrar and web hosting company, based in Phoenix, Arizona
