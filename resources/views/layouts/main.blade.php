<!doctype html>
<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        /* this is to help with ui/ux debugging */
        .red-border {
            border: 1px dashed red
        }
    </style>
</head>
<body>
    <div class="container">
        @yield('content')
    </div>
</body>
