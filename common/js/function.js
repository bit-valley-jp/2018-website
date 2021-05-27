jQuery(function($){

  (function() {

    if($('#home').length){

      // ランダム整数
      function randNum(max,min) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }

      // Array Shuffle
      function arreyShuffle(array){
        for(var i = array.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
      }

      // add bodies
      var type = ['typeA','typeB'];
      arreyShuffle(type);

      if(type[0] === 'typeA'){
        var alphabets = [{
            "name": "alphabet-a00",
            "type": "png"
          },{
            "name": "alphabet-c00",
            "type": "png"
          },{
            "name": "alphabet-d00",
            "type": "png"
          },{
            "name": "alphabet-e00",
            "type": "png"
          },{
            "name": "alphabet-f00",
            "type": "png"
          },{
            "name": "alphabet-g00",
            "type": "png"
          },{
            "name": "alphabet-h00",
            "type": "png"
          },{
            "name": "alphabet-i00",
            "type": "png"
          },{
            "name": "alphabet-j00",
            "type": "png"
          },{
            "name": "alphabet-k00",
            "type": "png"
          },{
            "name": "alphabet-l00",
            "type": "png"
          },{
            "name": "alphabet-m00",
            "type": "png"
          },{
            "name": "alphabet-n00",
            "type": "png"
          },{
            "name": "alphabet-o00",
            "type": "png"
          },{
            "name": "alphabet-p00",
            "type": "png"
          },{
            "name": "alphabet-q00",
            "type": "png"
          },{
            "name": "alphabet-r00",
            "type": "png"
          },{
            "name": "alphabet-s00",
            "type": "png"
          },{
            "name": "alphabet-t00",
            "type": "png"
          },{
            "name": "alphabet-u00",
            "type": "png"
          },{
            "name": "alphabet-v00",
            "type": "png"
          },{
            "name": "alphabet-w00",
            "type": "png"
          },{
            "name": "alphabet-x00",
            "type": "png"
          },{
            "name": "alphabet-y00",
            "type": "png"
          },{
            "name": "alphabet-z00",
            "type": "png"
        }];
      } else if(type[0] === 'typeB') {
        var alphabets = [];
        var title = [
            [{
              "name": "alphabet-i01",
              "type": "png"
            },{
              "name": "alphabet-i02",
              "type": "png"
            },{
              "name": "alphabet-i03",
              "type": "png"
            }],
            [{
              "name": "alphabet-t01",
              "type": "png"
            },{
              "name": "alphabet-t02",
              "type": "png"
            },{
              "name": "alphabet-t03",
              "type": "png"
            }],
            [{
              "name": "alphabet-v01",
              "type": "png"
            },{
              "name": "alphabet-v02",
              "type": "png"
            },{
              "name": "alphabet-v03",
              "type": "png"
            }],
            [{
              "name": "alphabet-a01",
              "type": "png"
            },{
              "name": "alphabet-a02",
              "type": "png"
            },{
              "name": "alphabet-a03",
              "type": "png"
            }],
            [{
              "name": "alphabet-l01",
              "type": "png"
            },{
              "name": "alphabet-l02",
              "type": "png"
            },{
              "name": "alphabet-l03",
              "type": "png"
            }],
            [{
              "name": "alphabet-l04",
              "type": "png"
            },{
              "name": "alphabet-l05",
              "type": "png"
            },{
              "name": "alphabet-l06",
              "type": "png"
            }],
            [{
              "name": "alphabet-e01",
              "type": "png"
            },{
              "name": "alphabet-e02",
              "type": "png"
            },{
              "name": "alphabet-e03",
              "type": "png"
            }],
            [{
              "name": "alphabet-y01",
              "type": "png"
            },{
              "name": "alphabet-y02",
              "type": "png"
            },{
              "name": "alphabet-y03",
              "type": "png"
            }],
            [{
              "name": "alphabet-201",
              "type": "png"
            },{
              "name": "alphabet-202",
              "type": "png"
            },{
              "name": "alphabet-203",
              "type": "png"
            }],
            [{
              "name": "alphabet-001",
              "type": "png"
            },{
              "name": "alphabet-002",
              "type": "png"
            },{
              "name": "alphabet-003",
              "type": "png"
            }],
            [{
              "name": "alphabet-101",
              "type": "png"
            },{
              "name": "alphabet-102",
              "type": "png"
            },{
              "name": "alphabet-103",
              "type": "png"
            }],
            [{
              "name": "alphabet-801",
              "type": "png"
            },{
              "name": "alphabet-802",
              "type": "png"
            },{
              "name": "alphabet-803",
              "type": "png"
            }]
        ];
        for (var i = 0; i < title.length; i += 1) {
          alphabets.push(title[i][randNum(3,1)-1]);
        }
      }

      arreyShuffle(alphabets);

      var alphabetsLength = alphabets.length;
      if(alphabetsLength > 16 ){
        alphabetsLength = 16;
      }

      var imgSrcs = [];

      for (var i = 0; i < alphabetsLength; i += 1) {
        if(alphabets[i]["type"] === 'svg') {
          imgSrcs.push('./img/' + alphabets[i]["name"] + '.svg');
        } else {
          imgSrcs.push('./img/png/' + alphabets[i]["name"] + '.png');
        }
      }

      var loader = new $.ImgLoader({
          srcs : imgSrcs,
          pipesize: 16,
          delay: 100,
          timeout: 20000,
          useXHR2: true
      });

      loader.on('allload', function($img){

        setTimeout(function(){
          $('#home #hero').addClass('animeStart');

          if($('html[class*="ie"]').length || $('html[class*="edge"]').length){

              $('#kv #line-v').css('visibility','visible');

              window.requestAnimFrame = function(){
                return (
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  }
                );
              }();

              var current_frame = 0;
              var total_frame = 120; // 2秒
              var handle = 0;

              var paths = new Array();
              var length = new Array();
              var rendered = false;

              [].slice.call( $('#kv #line-v polyline') ).forEach( function( path, i ) {
                paths[i] = path;
                var l = 3000;
                length[i] = l;
                paths[i].style.strokeDasharray = l + ' ' + l;
                paths[i].style.strokeDashoffset = l;
              } );

              // 線を引く関数
              function draw(){
                  progress = current_frame/total_frame;
                if (progress > 1) {
                  window.clearTimeout(handle);
                } else {
                  current_frame++;
                  for(var j=0, len = paths.length; j<len;j++){
                    paths[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
                  }
                  handle = window.requestAnimFrame(draw);
                }
              }

              function render(){
                if( rendered ) return;
                rendered = true;
                draw();
              }

              render();

          }

          setTimeout(function(){
            Matter.Runner.start(runner, engine);
          },4200);
        },200);

        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composites = Matter.Composites,
            Common = Matter.Common,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Query = Matter.Query,
            Vertices = Matter.Vertices,
            Svg = Matter.Svg,
            Bodies = Matter.Bodies;

        // create engine
        var engine = Engine.create(),
            world = engine.world;

        // create renderer
        var render = Render.create({
            element: document.getElementById('kv'),
            engine: engine,
            options: {
              wireframes: false,
              width: 1800,
              height: 1100
            }
        });

        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        var terrain;

        $.get('./img/terrain.svg').done(function(data) {
            var vertexSets = [];

            $(data).find('path').each(function(i, path) {
                vertexSets.push(Svg.pathToVertices(path, 30));
            });

            terrain = Bodies.fromVertices(900, 460, vertexSets, {
                isStatic: true,
                render: {
                  fillStyle: 'transparent',
                  strokeStyle: 'transparent',
                  lineWidth: 60
                }
            }, true);

            World.add(world, terrain);

            bodyOptions = {
                isStatic: true,
                render: {
                  fillStyle: 'transparent'
                }
            };
            World.add(world, [
              Bodies.rectangle(900, -1800, 1800, 50, bodyOptions),
              Bodies.rectangle(1800, -600, 50, 1800, bodyOptions),
              Bodies.rectangle(0, -600, 50, 1800, bodyOptions)
            ]);

            // add gyro control
            if(!$('html[class*="win"]').length && !$('html[class*="chrome"]').length){
              var updateGravity = function(event) {
                  var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
                      gravity = engine.world.gravity;

                  if (orientation === 0) {
                    gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
                    gravity.y = Common.clamp(event.beta, -90, 90) / 90;
                  } else if (orientation === 180) {
                    gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
                    gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
                  } else if (orientation === 90) {
                    gravity.x = Common.clamp(event.beta, -90, 90) / 90;
                    gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
                  } else if (orientation === -90) {
                    gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
                    gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
                  }
              };

              window.addEventListener('deviceorientation', updateGravity);
            }

            function randScale(max,min) {
              return Math.floor((Math.random()*(max-min)+min)*10)/10;
            }

            $.get('./img/alphabet-b01.svg').done(function(data) {
              var vertexSets = [],
                  color = '#000000',
                  scaleNum = randScale(1.6,1.5);

              $(data).find('path').each(function(i, path) {
                var points = Svg.pathToVertices(path, 10);
                var point = { x: 160, y: 160 };
                var scale = scaleNum;
                vertexSets.push(Vertices.scale(points, scale, scale, point));
              });

              World.add(world, Bodies.fromVertices(900, 460, vertexSets, {
                  frictionAir: 0.0001,
                  render: {
                    fillStyle: color,
                    strokeStyle: color,
                    lineWidth: 1
                  }
              }, true));
            });

            for (var i = 0; i < alphabetsLength; i += 1) {
              (function(i) {

                var xNum = 300 + i * 160,
                    yNum = -200 + i * -160,
                    scaleNum = randScale(1.75,1.6);
                if(6 < i){
                  xNum = 100 + (i - 6) * 160;
                  yNum = -400 + (i - 7) * -160;
                }

                if(alphabets[i]["type"] === 'svg') {

                  $.get(imgSrcs[i]).done(function(data) {
                    var vertexSets = [],
                        color = '#000000'

                    $(data).find('path').each(function(i, path) {
                      var points = Svg.pathToVertices(path, 50);
                      var point = { x: 80, y: 80 };
                      var scale = scaleNum;
                      vertexSets.push(Vertices.scale(points, scale, scale, point));
                    });

                    World.add(world, Bodies.fromVertices(xNum, yNum, vertexSets, {
                      frictionAir: 0.0001,
                      friction: 0,
                      frictionStatic: 0,
                      render: {
                        fillStyle: color,
                        strokeStyle: color,
                        lineWidth: 1
                        }
                    }, true));
                  });

                } else if(alphabets[i]["type"] === 'png') {

                  World.add(world, Bodies.rectangle(xNum, yNum, ($img[i][0].width/2)*(scaleNum*0.95), ($img[i][0].height/2)*(scaleNum*0.95), {
                        frictionAir: 0.0001,
                        friction: 0,
                        frictionStatic: 0,
                        render: {
                            sprite: {
                                texture: imgSrcs[i],
                                xScale: 0.5*scaleNum,
                                yScale: 0.5*scaleNum
                            }
                        }
                    })
                  );

                }

              })(i);
            }
        });

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                stiffness: 0.2,
                render: {
                  visible: false
                }
              }
            });

        World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        //　一時停止
        Matter.Runner.stop(runner);


      });

      loader.load();  //ローディングを実行

    }

  })();

  var homeAboutNavWaypoints = $('#home #about').waypoint({
    handler: function(direction) {
      if(direction === 'down'){
        $('#sticky-nav').addClass('sticky');
        $('#page-nav').addClass('sticky');
      } else {
        $('#sticky-nav').removeClass('sticky');
        $('#page-nav').removeClass('sticky');
      }
    },
    offset: '0'
  });

  TweenMax.set(['#home #about header > h2 span, #home #about header > h2 small, #home #about header > p'], { y: 15, opacity: 0 });
  var homeAboutHeaderAnime = $('#home #about header').waypoint({
    handler: function(direction) {
      TweenMax.to('#home #about header h2 span', 0.75, { y: 0, opacity: 1 });
      TweenMax.to('#home #about header h2 small', 0.75, { delay: 0.5, y: 0, opacity: 1 });
      TweenMax.to('#home #about header p', 0.75, { delay: 1, y: 0, opacity: 1 });
      this.destroy();
    },
    offset: '70%'
  });

  TweenMax.set(['#home #contents header h2 span','#home #contents header h2 small','#home #contents header h4','#home #contents header h4 + p'], { y: 15, opacity: 0 });
  var homeContentsAnime = $('#home #contents header').waypoint({
    handler: function(direction) {
      TweenMax.to('#home #contents header h2 span', 0.75, { y: 0, opacity: 1 });
      TweenMax.to('#home #contents header h2 small', 0.75, { delay: 0.5, y: 0, opacity: 1 });
      TweenMax.to('#home #contents header h4', 0.75, { delay: 1, y: 0, opacity: 1 });
      TweenMax.to('#home #contents header h4 + p', 0.75, { delay: 1.5, y: 0, opacity: 1 });
      this.destroy();
    },
    offset: '70%'
  });

  TweenMax.set(['#home #contents .information .list > *'], { y: 15, opacity: 0 });
  var homeAboutInfoAnime = $('#home #contents .information').waypoint({
    handler: function(direction) {
      TweenMax.to('#home #contents .information h3', 0.75, { y: 0, opacity: 1 });
      TweenMax.to('#home #contents .information dl', 0.75, { delay: 0.5, y: 0, opacity: 1 });
      this.destroy();
    },
    offset: '70%'
  });

  TweenMax.set(['#home #contents .share > div > p'], { y: 15, opacity: 0 });
  var homeAboutShareAnime = $('#home #contents .share').waypoint({
    handler: function(direction) {
      TweenMax.to('#home #contents .share .btn', 0.75, { y: 0, opacity: 1 });
      TweenMax.to('#home #contents .share .tag', 0.75, { delay: 0.5, y: 0, opacity: 1 });
      this.destroy();
    },
    offset: '70%'
  });

  TweenMax.set(['#home #sponsor section header','#home #sponsor section ul'], { y: 15, opacity: 0 });
  $('#home #sponsor section').each(function(i){
    $(this).waypoint({
      element: this,
      handler: function(direction) {
        TweenMax.to(this.element.children[0], 0.75, { y: 0, opacity: 1 });
        TweenMax.to(this.element.children[1], 0.75, { delay: 0.5, y: 0, opacity: 1 });
        this.destroy();
      },
      offset: '70%'
    });
  });

  // SPONSOR RAMDOM
  $(function() {
    var arr = [];
    $("#home #sponsor ul.multiple li").each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $("#home #sponsor ul.multiple").empty();
    for(i=0; i < arr.length; i++) {
      $("#home #sponsor ul.multiple").append('<li>' + arr[i] + '</li>');
    }
  });
  $(function() {
    var arr = [];
    $("#home #sponsor ul.multiple-5 li").each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $("#home #sponsor ul.multiple-5").empty();
    for(i=0; i < arr.length; i++) {
      $("#home #sponsor ul.multiple-5").append('<li>' + arr[i] + '</li>');
    }
  });

  var homeFooterWaypoints = $('#home #footer').waypoint({
    handler: function(direction) {
      if(direction === 'up'){
        $('#page-nav').addClass('sticky');
      } else {
        $('#page-nav').removeClass('sticky');
      }
    },
    offset: '100%'
  });

  $('#page-nav').midnight();

  $('#home #main article').each(function(i){
    new Waypoint.Inview({
      element: this,
      exit: function(direction) {
        var now = this.element.id;
        var prev = $("#"+now).prev('article');
        var next = $("#"+now).next('article');
        if(prev.length){
          $('#page-nav .prev a').attr('href',"#"+$(prev).attr('id'));
        } else {
          $('#page-nav .prev a').attr('href',"#header");
        }
        if(next.length){
          $('#page-nav .next a').attr('href',"#"+$(next).attr('id'));
        } else {
          $('#page-nav .next a').attr('href',"#footer");
        }
      }
    });
  });

  var homeTopWaypoints = $('#home #about').waypoint({
    handler: function(direction) {
      if(direction === 'up'){
        $('#page-nav .prev a').attr('href',"#header");
      }
    },
    offset: '-10%'
  });

  var homeMapWaypoints = $('#home #contents #gmap').waypoint({
    handler: function(direction) {
      loadScript();
      this.destroy();
    },
    offset: '100%'
  });

  // Smooth Scroll
  $('a[href^="#"]').on('click', function() {
    var targetElement = $(this).attr('href')
    var scrollX = $(targetElement).offset().top
    $('html,body').animate({
      scrollTop : scrollX
    },1000)
    return false;
  });

  // Timetable Json To Create Table
  if($('#home').length){
    $('#timetable .table').append('<div class="pc"><span class="line01"></span><table><thead><tbody>');
    $('#timetable .table').append('<div class="sp">');
    $.getJSON("./json/timetable.json", function(data){

      var targetHead = '#timetable .table .pc table thead';
      $(targetHead).append('<tr>');
      $(data).each(function(i){
        $(targetHead + ' tr').append('<th>');
        $('<div class="box" style="background-image:url('+ this.trackImg +');">'+
          '<h3 class="track"><img src="'+ this.trackTitleImg +'" alt="'+ this.trackName +'"></h3>'+
          '<h3 class="room en">'+ this.roomNameEn +'</h3>'+
          '<h4 class="room jp">'+ this.roomNameJp +'</h4>'+
          '</div>')
          .appendTo(targetHead + ' tr th:eq('+ i +')');
      });

      function categoryTranlateClass(category){
        if(category === 'ライブ配信'){
          category = 'Live';
        } else if(category === 'クラウド'){
          category = 'Cloud';
        } else if(category === 'ブロックチェーン'){
          category = 'Blockchain';
        } else if(category === 'ダイバーシティ'){
          category = 'Diversity';
        } else if(category === 'AgriTech'){
          category = 'Technology';
        } else if(category === '未定'){
          category = 'Undecided';
        }
        return category;
      }

      function sessionSpeaker(session, id){
        var targetSpeaker = '#'+ id +' > a .speaker';
        if(session.speaker){
          var speaker = session.speaker;
          Object.keys(speaker).forEach(function(key){
            $('<h4 class="name jp">'+ speaker[key].nameJp +'</h4>'+
              '<p class="company">'+ speaker[key].company +'<br><span class="department">'+ speaker[key].department +'</span></p>')
            .appendTo(targetSpeaker);
          });
        } else {
          var moderator = session.moderator;
          Object.keys(moderator).forEach(function(key){
            $('<p class="position Moderator">Moderator</p>'+
              '<h4 class="name jp">'+ moderator[key].nameJp +'</h4>'+
              '<p class="company">'+ moderator[key].company +'<br><span class="department">'+ moderator[key].department +'</span></p>')
            .appendTo(targetSpeaker);
          });
          var paneler = session.paneler;
          Object.keys(paneler).forEach(function(key){
            $('<p class="position Debater">Paneler</p>'+
              '<div class="wrap">'+
              '<h4 class="name jp">'+ paneler[key].nameJp +'</h4>'+
              '<p class="company">'+ paneler[key].company +'<br><span class="department">'+ paneler[key].department +'</span></p>'+
              '</div>')
            .appendTo(targetSpeaker);
          });
        }
        $('#'+ id +'-popup .box').prepend($('#'+ id +' > a').html());
      }
      function sessionPart(session, id){
        var targetPart = $('#'+ id);
        if(session.part){
          var part = session.part;
          Object.keys(part).forEach(function(key){
            id = id+'-part'+key;
            $('<div id="'+ id +'" class="box '+ categoryTranlateClass(part[key].category) +'">'+
              '<a href="#'+ id +'-popup" data-lity>'+
                '<p class="category">'+ part[key].category +'</p>'+
                '<p class="timespan">'+ part[key].time.start +' - '+ part[key].time.end +'</p>'+
                '<h3 class="session-title">'+ part[key].title +'</h3>'+
                '<div class="speaker"></div>'+
              '</a>'+
              '</div>'+
              '<div id="'+ id +'-popup" class="lity-hide">'+
                '<div class="box '+ categoryTranlateClass(part[key].category) +'">'+
                  '<p class="description">'+ part[key].description +'</p>'+
                '</div>'+
              '</div>')
              .appendTo(targetPart);
            sessionSpeaker(part[key], id);
          });
        }
      }

      var max = 15;
      for(j=0; j < max; j++){
        var num = ('0'+(j+1)).slice(-2);
        $('#timetable .table .pc table tbody').append('<tr class="session'+ num +'">');
        var target = '#timetable .table .pc table tbody > tr.session'+ num;
        $(data).each(function(k){

          var session = this.session[j];
          if(session){
            var id = this.trackType + num;
            if(session.categoryTitle && session.description) {
              $('<td class="track'+ this.trackType +' single" colspan="3">'+
                '<p class="time start">'+ session.time.start +'</p>'+
                '<div id="'+ id +'" class="box '+ categoryTranlateClass(session.category) +'">'+
                '<a href="#'+ id +'-popup" data-lity>'+
                  '<p class="category">'+ session.category +'</p>'+
                  '<p class="category-title">'+ session.categoryTitle +'</p>'+
                  '<h3 class="session-title">'+ session.title +'</h3>'+
                  '<div class="speaker"></div>'+
                '</a>'+
                '</div>'+
                '<div id="'+ id +'-popup" class="lity-hide">'+
                  '<div class="box '+ categoryTranlateClass(session.category) +'">'+
                    '<p class="description">'+ session.description +'</p>'+
                  '</div>'+
                '</div>'+
                '<p class="time end">'+ session.time.end +'</p>'+
                '</td>')
                .appendTo(target);
              sessionSpeaker(session, id);
              return false;
            } else if(session.categoryTitle) {
              $('<td class="track'+ this.trackType +' single" colspan="3">'+
                '<p class="time start">'+ session.time.start +'</p>'+
                '<div id="'+ id +'" class="box '+ categoryTranlateClass(session.category) +'">'+
                  '<div class="dummy">'+
                  '<p class="category">'+ session.category +'</p>'+
                  '<p class="category-title">'+ session.categoryTitle +'</p>'+
                  '<h3 class="session-title">'+ session.title +'</h3>'+
                  '</div>'+
                '</div>'+
                '<p class="time end">'+ session.time.end +'</p>'+
                '</td>')
                .appendTo(target);
            } else if(session.category && session.description) {
              $('<td class="track'+ this.trackType +'">'+
                '<p class="time start">'+ session.time.start +'</p>'+
                '<div id="'+ id +'" class="box '+ categoryTranlateClass(session.category) +'">'+
                '<a href="#'+ id +'-popup" data-lity>'+
                  '<p class="category">'+ session.category +'</p>'+
                  '<p class="timespan">'+ session.time.start +' - '+ session.time.end +'</p>'+
                  '<h3 class="session-title">'+ session.title +'</h3>'+
                  '<div class="speaker"></div>'+
                '</a>'+
                '</div>'+
                '<div id="'+ id +'-popup" class="lity-hide">'+
                  '<div class="box '+ categoryTranlateClass(session.category) +'">'+
                    '<p class="description">'+ session.description +'</p>'+
                  '</div>'+
                '</div>'+
                '<p class="time end">'+ session.time.end +'</p>'+
                '</td>')
                .appendTo(target);
              sessionSpeaker(session, id);
            } else if(session.category === 'Break') {
              $('<td class="track'+ this.trackType +' break" colspan="3">'+
                '<p class="time start">'+ session.time.start +'</p>'+
                '<div id="'+ id +'" class="box '+ categoryTranlateClass(session.category) +'">'+
                  '<div class="dummy">'+
                  '<h3 class="session-title">'+ session.title +'</h3>'+
                  '</div>'+
                '</div>'+
                '<p class="time end">'+ session.time.end +'</p>'+
                '</td>')
                .appendTo(target);
              return false;
            } else if(session.part) {
              $('<td class="track'+ this.trackType +'">'+
                '<p class="time start">'+ session.time.start +'</p>'+
                '<div id="'+ id +'" class="box part">'+
                '</div>'+
                '<p class="time end">'+ session.time.end +'</p>'+
                '</td>').appendTo(target);
              sessionPart(session, id);
            }
          }

        });
      }

      // SP Timetable Json To Create Table
      var targetSP = '#timetable .table .sp';
      $(targetSP).append('<nav class="slide"><div class="swiper-container"><div class="swiper-wrapper"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
      $(data).each(function(l){
        $(targetSP + ' .slide .swiper-container .swiper-wrapper').append('<div class="swiper-slide">');
        $('<div class="box" style="background-image:url('+ this.trackImg +');">'+
          '<h3 class="track"><img src="'+ this.trackTitleImg +'" alt="'+ this.trackName +'"></h3>'+
          '<h3 class="room en">'+ this.roomNameEn +'</h3>'+
          '<h4 class="room jp">'+ this.roomNameJp +'</h4>'+
          '</div>')
          .appendTo(targetSP + ' .slide .swiper-container .swiper-wrapper .swiper-slide:eq('+ l +')');
      });

      // SP Nav Swiper
      var spNavSwiper = new Swiper ('#timetable .table .sp .slide .swiper-container', {
        autoHeight: true,
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 10,
        loopAdditionalSlides: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      $(targetSP).append('<div class="tracks"><div class="swiper-container"><div class="swiper-wrapper">');
      $(data).each(function(m){
        $(targetSP + ' .tracks .swiper-container .swiper-wrapper').append('<div class="swiper-slide">');
        var targetSlide = targetSP + ' .tracks .swiper-container .swiper-wrapper .swiper-slide:eq('+ m +')';
        var trackType = this.trackType;
        $(this.session).each(function(n){
          var num = ('0'+(n+1)).slice(-2);
          var id = trackType + num +'-sp';
          if(this.categoryTitle && this.description) {
            $('<div class="content single">'+
              '<p class="time start">'+ this.time.start +'</p>'+
              '<div id="'+ id +'" class="box '+ categoryTranlateClass(this.category) +'">'+
              '<a href="#'+ id +'-popup" data-lity>'+
                '<p class="category">'+ this.category +'</p>'+
                '<p class="category-title">'+ this.categoryTitle +'</p>'+
                '<h3 class="session-title">'+ this.title +'</h3>'+
                '<div class="speaker"></div>'+
              '</a>'+
              '</div>'+
              '<div id="'+ id +'-popup" class="lity-hide">'+
                '<div class="box '+ categoryTranlateClass(this.category) +'">'+
                  '<p class="description">'+ this.description +'</p>'+
                '</div>'+
              '</div>'+
              '<p class="time end">'+ this.time.end +'</p>'+
              '</div>')
              .appendTo(targetSlide);
            sessionSpeaker(this, id);
          } else if(this.categoryTitle) {
            $('<div class="content break">'+
              '<p class="time start">'+ this.time.start +'</p>'+
              '<div id="'+ id +'" class="box '+ categoryTranlateClass(this.category) +'">'+
                '<div class="dummy">'+
                '<p class="category-title">'+ this.categoryTitle +'</p>'+
                '<h3 class="session-title">'+ this.title +'</h3>'+
                '</div>'+
              '</div>'+
              '<p class="time end">'+ this.time.end +'</p>'+
              '</div>')
              .appendTo(targetSlide);
          } else if(this.category && this.description) {
            $('<div class="content">'+
              '<p class="time start">'+ this.time.start +'</p>'+
              '<div id="'+ id +'" class="box '+ categoryTranlateClass(this.category) +'">'+
              '<a href="#'+ id +'-popup" data-lity>'+
                '<p class="category">'+ this.category +'</p>'+
                '<p class="timespan">'+ this.time.start +' - '+ this.time.end +'</p>'+
                '<h3 class="session-title">'+ this.title +'</h3>'+
                '<div class="speaker"></div>'+
              '</a>'+
              '</div>'+
              '<div id="'+ id +'-popup" class="lity-hide">'+
                '<div class="box '+ categoryTranlateClass(this.category) +'">'+
                  '<p class="description">'+ this.description +'</p>'+
                '</div>'+
              '</div>'+
              '<p class="time end">'+ this.time.end +'</p>'+
              '</div>')
              .appendTo(targetSlide);
            sessionSpeaker(this, id);
          } else if(this.category === 'Break') {
            $('<div class="content break">'+
              '<p class="time start">'+ this.time.start +'</p>'+
              '<div id="'+ id +'" class="box '+ categoryTranlateClass(this.category) +'">'+
                '<div class="dummy">'+
                '<h3 class="session-title">'+ this.title +'</h3>'+
                '</div>'+
              '</div>'+
              '<p class="time end">'+ this.time.end +'</p>'+
              '</div>')
              .appendTo(targetSlide);
          } else if(this.part) {
            $('<div class="content">'+
              '<p class="time start">'+ this.time.start +'</p>'+
              '<div id="'+ id +'" class="box part">'+
              '</div>'+
              '<p class="time end">'+ this.time.end +'</p>'+
              '</div>')
              .appendTo(targetSlide);
            sessionPart(this, id);
          }
        });
      });

      // SP Tracks Swiper
      var spTracksSwiper = new Swiper ('#timetable .table .sp .tracks .swiper-container', {
        autoHeight: true,
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        loopAdditionalSlides: 1,
        on: {
          slideChange: function () {
            var activeIndex = this.activeIndex;
            $('#timetable-nav .list').removeClass('active');
            $('#timetable-nav .list').eq(activeIndex-2).addClass('active');
          },
        }
      });

      spTracksSwiper.controller.control = spNavSwiper;
      spNavSwiper.controller.control = spTracksSwiper;

      // Timetable Sticky Nav
      var targetMain = '#home #main';
      $(targetMain).prepend('<nav id="timetable-nav">');
      $(data).each(function(o){
        $(targetMain + ' #timetable-nav').append('<div class="list">');
        $('<div class="box" style="background-image:url('+ this.trackImg +');">'+
          '<h3 class="track"><img src="'+ this.trackTitleImg +'" alt="'+ this.trackName +'"></h3>'+
          '</div>')
          .appendTo(targetMain + ' #timetable-nav .list:eq('+ o +')');
      });

      var homeTimetableNavIn = $('#home #timetable').waypoint({
        handler: function(direction) {
          if(direction === 'down'){
            $('#timetable-nav').addClass('sticky');
          } else {
            $('#timetable-nav').removeClass('sticky');
          }
        },
        offset: '-50%'
      });
      var homeTimetableNavOut = $('#home #timetable + *').waypoint({
        handler: function(direction) {
          if(direction === 'up'){
            $('#timetable-nav').addClass('sticky');
          } else {
            $('#timetable-nav').removeClass('sticky');
          }
        },
        offset: '100%'
      });

      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(width < 720){
        var activeIndex = spTracksSwiper.activeIndex;
        $('#timetable-nav .list').eq(activeIndex-2).addClass('active');
        $('#timetable-nav .list').on('click', function(){
          var index = $('#timetable-nav .list').index(this);
          spNavSwiper.slideTo(index+1);
          spTracksSwiper.slideTo(index+2);
          $('#timetable-nav .list').removeClass('active');
          $('#timetable-nav .list').eq(index).addClass('active');
        });
      }

    });
  }

  // Speaker Json To Create List
  if($('#home').length){
    $('#speaker .list').append('<ul>');
    $.getJSON("./json/speaker.json", function(data){
      $(data).each(function(i){

        var num = ('0'+(i+1)).slice(-2);
        $('<li class="speaker'+ num +'">'+
          '<figure style="background-image:url('+ this.portrait +');"><img src="'+ this.portrait +'" alt="'+ this.nameJp +'"></figure>'+
          '<p class="name en">'+ this.nameEn +'</p>'+
          '<h4 class="name jp">'+ this.nameJp +'</h4>'+
          '<p class="company" style="text-align: center;">'+ this.company +'<br><span class="department" style="text-align: center;">'+ this.department +'</span></p>'+
          '<ul class="links"></ul>'+
          '</li>').appendTo('#speaker .list > ul');

        var links = this.links;
        Object.keys(links).forEach(function(key){
          if(!(links[key] === '')){
            $('<li class="'+ key +'"><a href="'+ links[key] +'" target="_blank"><img src="./json/img/icon/icon_'+ key +'01.svg" alt="'+ key +'"></a></li>')
            .appendTo('li.speaker'+ num +' ul.links');
          }
        });

      });
    });
  }

});

// Google Map
function initialize() {
  var styleOptions = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
  var styledMap = new google.maps.StyledMapType(styleOptions,{name: "Grayscale"});
  var latlng = new google.maps.LatLng(35.655514,139.699962);
  var mapOptions = {
    zoom: 16,
    center: latlng,
    scrollwheel: false,
    mapTypeControl: false
  };
  var image = {
    url: 'https://bit-valley.jp/2018/common/img/marker01.png',
    scaledSize : new google.maps.Size(152, 51)
  };
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'click', function() {
    window.open('https://goo.gl/maps/vh3bsA7Abk32');
  });
  var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
  marker.setMap(map);
  map.mapTypes.set('grayscale', styledMap);
  map.setMapTypeId('grayscale');
}
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '';
  document.body.appendChild(script);
}
