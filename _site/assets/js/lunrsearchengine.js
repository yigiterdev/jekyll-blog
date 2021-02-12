
var documents = [{
    "id": 0,
    "url": "https://yigiterdev-blog.netlify.app//404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://yigiterdev-blog.netlify.app//about",
    "title": "About",
    "body": "I’m Ahmet Buğra Yiğiter. I’m studying Computer Engineering in Gazi University. It’ s my career goal to develop myself more and more everday. My main intention is improving myself at software technologies. I’m learning about Web Development recently. I work at JamLab Web Development Intern. You can find my Linkedin and GitHub account here : GitHub / Linkedin "
    }, {
    "id": 2,
    "url": "https://yigiterdev-blog.netlify.app//categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://yigiterdev-blog.netlify.app//",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "https://yigiterdev-blog.netlify.app//robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "https://yigiterdev-blog.netlify.app//loremipsum/",
    "title": "What is Lorem Ipsum?",
    "body": "2021/02/12 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    }, {
    "id": 6,
    "url": "https://yigiterdev-blog.netlify.app//reactjs/",
    "title": "Get Started With React.js",
    "body": "2021/02/08 - "
    }, {
    "id": 7,
    "url": "https://yigiterdev-blog.netlify.app//javascriptframeworks/",
    "title": "React vs Vue vs Angular",
    "body": "2021/02/07 - Which JavaScript framework is better? "
    }, {
    "id": 8,
    "url": "https://yigiterdev-blog.netlify.app//education/",
    "title": "Computer Engineering",
    "body": "2021/02/06 - What is computer engineering? HTML: &lt;li class= ml-1 mr-1 &gt; &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt; &lt;/a&gt;&lt;/li&gt;CSS: . highlight . c { color: #999988; font-style: italic;}. highlight . err { color: #a61717; background-color: #e3d2d2;}JS: // alertbar later$(document). scroll(function () { var y = $(this). scrollTop(); if (y &gt; 280) {  $( . alertbar ). fadeIn(); } else {  $( . alertbar ). fadeOut(); }});Python: print( Hello World )Ruby: require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: printf( Hello World );"
    }, {
    "id": 9,
    "url": "https://yigiterdev-blog.netlify.app//tailwindcss/",
    "title": "What is Tailwind Css?",
    "body": "2021/02/05 - Rapidly build modern websites without ever leaving your HTML. "
    }, {
    "id": 10,
    "url": "https://yigiterdev-blog.netlify.app//firstblog/",
    "title": "My First Jekyll Blog",
    "body": "2021/02/04 - I’ve been learning Jekyll for a week and this is my first blog. I’m studying Computer Engineering in Gazi University. It’ s my career goal to develop myself more and more everday. My main intention is improving myself at software technologies. I’m learning about Web Development recently. I want to increase my blog posts. I’m trying to learn React these days. I did two projects to learn react, you can browse their links.  First Project Second Project"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});