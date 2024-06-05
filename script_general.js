(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"class":"Player","gap":10,"definitions": [{"class":"Panorama","hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]}}],"thumbnailUrl":"media/panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_t.jpg","partial":false,"id":"panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574","vfov":180,"overlays":["this.overlay_F714BDE9_E7C1_0CE5_41E7_5C46F86382FD"],"hfovMax":130,"label":trans('panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574.label'),"pitch":0,"adjacentPanoramas":[{"distance":67.47,"yaw":155.6,"select":"this.overlay_F714BDE9_E7C1_0CE5_41E7_5C46F86382FD.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F714BDE9_E7C1_0CE5_41E7_5C46F86382FD"},"panorama":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7","class":"AdjacentPanorama","backwardYaw":-101.25}],"hfov":360,"data":{"label":"Verri\u00e8re"}},{"shadow":false,"class":"Label","borderRadius":0,"textDecoration":"none","width":350,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"maxHeight":50,"fontSize":30,"maxWidth":340,"fontStyle":"normal","minHeight":50,"right":"0.47%","minWidth":340,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"borderSize":0},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_camera","class":"PanoramaPlayListItem","media":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_camera","class":"PanoramaPlayListItem","media":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_camera","class":"PanoramaPlayListItem","media":"this.panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_camera","class":"PanoramaPlayListItem","media":"this.panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_camera"},{"shadow":false,"class":"Container","borderRadius":0,"gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","paddingRight":0,"paddingLeft":0,"horizontalAlign":"center","top":"14.6%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"maxWidth":60,"minHeight":320,"right":"0%","minWidth":60,"borderSize":0,"data":{"name":"-button set"}},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"borderSize":0},{"playbackBarProgressBorderRadius":0,"class":"ViewerArea","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"toolTipFontFamily":"Arial","playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadHeight":30,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":1500,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"playbackBarHeadShadowVerticalLength":0,"displayTooltipInSurfaceSelection":true,"left":0,"playbackBarHeadShadowHorizontalLength":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]}}],"thumbnailUrl":"media/panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_t.jpg","partial":false,"id":"panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884","vfov":180,"overlays":["this.overlay_F722B9AE_E7C3_157C_41EA_6A8EA74B79C0"],"hfovMax":130,"label":trans('panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884.label'),"pitch":0,"adjacentPanoramas":[{"distance":6.58,"yaw":53,"select":"this.overlay_F722B9AE_E7C3_157C_41EA_6A8EA74B79C0.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F722B9AE_E7C3_157C_41EA_6A8EA74B79C0"},"panorama":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49","class":"AdjacentPanorama","backwardYaw":-167.42}],"hfov":360,"data":{"label":"Salle de bain"}},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"borderSize":0},{"gap":10,"itemThumbnailShadowHorizontalLength":3,"class":"ThumbnailList","right":"0.12%","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"itemLabelTextDecoration":"none","itemLabelFontFamily":"Arial","itemLabelHorizontalAlign":"center","paddingTop":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"itemPaddingRight":3,"itemThumbnailWidth":75,"paddingLeft":20,"itemPaddingLeft":3,"horizontalAlign":"left","itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemOpacity":1,"itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"toolTipHorizontalAlign":"center","height":135.02,"itemThumbnailShadowVerticalLength":3,"itemBackgroundColorDirection":"vertical","itemThumbnailShadow":true,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"itemHorizontalAlign":"center","layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailOpacity":1,"itemThumbnailShadowSpread":1,"itemLabelPosition":"bottom","left":"0.01%","itemLabelGap":9,"selectedItemLabelFontWeight":"bold","itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.54,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"minWidth":20,"itemThumbnailBorderRadius":50,"itemPaddingBottom":3,"borderSize":0,"rollOverItemLabelFontWeight":"normal","itemMode":"normal"},{"class":"Panorama","hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]}}],"thumbnailUrl":"media/panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_t.jpg","partial":false,"id":"panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7","vfov":180,"overlays":["this.overlay_E8C54E83_E7C7_0F25_41EC_C368253FA600","this.overlay_F7A95F4C_E7C1_0D23_41E6_0C0A8FF9612B"],"hfovMax":130,"label":trans('panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7.label'),"pitch":0,"adjacentPanoramas":[{"distance":28.29,"yaw":-101.25,"select":"this.overlay_E8C54E83_E7C7_0F25_41EC_C368253FA600.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E8C54E83_E7C7_0F25_41EC_C368253FA600"},"panorama":"this.panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574","class":"AdjacentPanorama","backwardYaw":155.6},{"distance":18.75,"yaw":111.99,"select":"this.overlay_F7A95F4C_E7C1_0D23_41E6_0C0A8FF9612B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F7A95F4C_E7C1_0D23_41E6_0C0A8FF9612B"},"panorama":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49","class":"AdjacentPanorama","backwardYaw":-105.51}],"hfov":360,"data":{"label":"Salon"}},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","paddingRight":0,"paddingLeft":0,"top":"6.78%","verticalAlign":"middle","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"right":"0.05%","minWidth":60,"borderSize":0,"data":{"name":"image button menu"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","media":"this.panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_camera","class":"PanoramaPlayListItem","media":"this.panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"borderSize":0},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_EC28E8DB_E7C1_1325_41DE_05FB056E0574_camera"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7_camera"},{"shadow":false,"class":"IconButton","borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"borderSize":0},{"shadow":false,"class":"Image","borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"class":"Panorama","hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]}}],"thumbnailUrl":"media/panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49_t.jpg","partial":false,"id":"panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49","vfov":180,"overlays":["this.overlay_F6801B7A_E7C1_35E7_41E9_2A8BED305433","this.overlay_F59E473C_E7C1_3D63_41DF_C63552113017"],"hfovMax":130,"label":trans('panorama_EC17B283_E7C1_7724_41E9_CC04B4D59C49.label'),"pitch":0,"adjacentPanoramas":[{"distance":7.06,"yaw":-167.42,"select":"this.overlay_F6801B7A_E7C1_35E7_41E9_2A8BED305433.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F6801B7A_E7C1_35E7_41E9_2A8BED305433"},"panorama":"this.panorama_EB8FC4C6_E7C1_332F_41D3_1E14F2504884","class":"AdjacentPanorama","backwardYaw":53},{"distance":10.88,"yaw":-105.51,"select":"this.overlay_F59E473C_E7C1_3D63_41DF_C63552113017.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F59E473C_E7C1_3D63_41DF_C63552113017"},"panorama":"this.panorama_EC17A84C_E7C1_1323_41EB_2D1EEBF6EDA7","class":"AdjacentPanorama","backwardYaw":111.99}],"hfov":360,"data":{"label":"Chambre"}},{"areas":["this.HotspotPanoramaOverlayArea_E8039E4A_E7C1_0F27_41E4_4A031F657074"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":155.6,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-1.43,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_F714BDE9_E7C1_0CE5_41E7_5C46F86382FD"},{"areas":["this.HotspotPanoramaOverlayArea_E81ADA1C_E7C3_1723_4189_1E3205491189"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":53,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-14.48,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_F722B9AE_E7C3_157C_41EA_6A8EA74B79C0"},{"areas":["this.HotspotPanoramaOverlayArea_E976CEF3_E7C7_0CE5_41DD_8BC0E10B6CAF"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":-101.25,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-3.43,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_E8C54E83_E7C7_0F25_41EC_C368253FA600"},{"areas":["this.HotspotPanoramaOverlayArea_F7B98F4F_E7C1_0D3D_41E4_9C717CEA83B5"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":111.99,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-5.17,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_F7A95F4C_E7C1_0D23_41E6_0C0A8FF9612B"},{"areas":["this.HotspotPanoramaOverlayArea_E8338BEF_E7C1_34FD_4187_49736F613F5C"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":-167.42,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-13.53,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_F6801B7A_E7C1_35E7_41E9_2A8BED305433"},{"areas":["this.HotspotPanoramaOverlayArea_F5AD6751_E7C1_3D25_41E5_E0B945B2811E"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","distance":50,"yaw":-105.51,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"link"},"verticalAlign":"middle","hfov":6,"pitch":-8.87,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_F59E473C_E7C1_3D63_41DF_C63552113017"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E8039E4A_E7C1_0F27_41E4_4A031F657074"},{"id":"res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192","levels":[{"height":141,"width":141,"url":"media/res_F5BDEBA3_E7C3_1565_41D2_79FA784CA192_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E81ADA1C_E7C3_1723_4189_1E3205491189"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E976CEF3_E7C7_0CE5_41DD_8BC0E10B6CAF"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F7B98F4F_E7C1_0D3D_41E4_9C717CEA83B5"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E8338BEF_E7C1_34FD_4187_49736F613F5C"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F5AD6751_E7C1_3D25_41E5_E0B945B2811E"}],"width":"100%","borderRadius":0,"mediaActivationMode":"window","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"defaultVRPointer":"gaze","paddingBottom":0,"id":"rootPlayer","overflow":"hidden","scripts":{"isPanorama":TDV.Tour.Script.isPanorama,"translate":TDV.Tour.Script.translate,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"downloadFile":TDV.Tour.Script.downloadFile,"playAudioList":TDV.Tour.Script.playAudioList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"resumePlayers":TDV.Tour.Script.resumePlayers,"shareSocial":TDV.Tour.Script.shareSocial,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"mixObject":TDV.Tour.Script.mixObject,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setValue":TDV.Tour.Script.setValue,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizStart":TDV.Tour.Script.quizStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizFinish":TDV.Tour.Script.quizFinish,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setLocale":TDV.Tour.Script.setLocale,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility},"paddingRight":0,"paddingLeft":0,"mouseWheelEnabled":true,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","minHeight":20,"data":{"defaultLocale":"fr","initialScale":0.65,"name":"Player28156","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Jun 5 2024