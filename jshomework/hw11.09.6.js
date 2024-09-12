function link(protocol,domain,path){
    c=`${protocol}//${domain}/${path}`;
    console.log(c);
}
link("https","example.com","/about");