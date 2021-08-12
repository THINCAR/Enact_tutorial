call ares-install -r test-app
call npm run pack -p
call ares-package dist -o ./dist/dist
call ares-install ./dist/dist/test-app_1.0.0_all.ipk
call ares-inpesct test-app -o

^Z