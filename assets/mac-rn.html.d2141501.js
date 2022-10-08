import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,a as n,b as e,d as s,e as i,r as t}from"./app.35209419.js";const c={},d=n("h1",{id:"macos-\u7CFB\u7EDF\u4E0B\u642D\u5EFAreactnative\u73AF\u5883",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#macos-\u7CFB\u7EDF\u4E0B\u642D\u5EFAreactnative\u73AF\u5883","aria-hidden":"true"},"#"),e(" MacOs \u7CFB\u7EDF\u4E0B\u642D\u5EFAReactNative\u73AF\u5883")],-1),p=n("h2",{id:"_1-xcode\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-xcode\u5B89\u88C5","aria-hidden":"true"},"#"),e(" 1. Xcode\u5B89\u88C5")],-1),u={href:"https://uovol.com/macos-xcode-version",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_2-\u5B89\u88C5watchman" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5watchman" aria-hidden="true">#</a> 2. \u5B89\u88C5watchman</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Homebrew\u8BBE\u7F6E\u56FD\u5185\u955C\u50CF\u6E90</span>
/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>

brew <span class="token function">install</span> watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u9047\u7F51\u7EDC\u539F\u56E0\u53EF\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">unzip</span> watchman-*-linux.zip
<span class="token builtin class-name">cd</span> watchman-vYYYY.MM.DD.00-linux
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/<span class="token punctuation">{</span>bin,lib<span class="token punctuation">}</span> /usr/local/var/run/watchman
<span class="token function">sudo</span> <span class="token function">cp</span> bin/* /usr/local/bin
<span class="token function">sudo</span> <span class="token function">cp</span> lib/* /usr/local/lib
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">755</span> /usr/local/bin/watchman
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">2777</span> /usr/local/var/run/watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={href:"https://zhuanlan.zhihu.com/p/111014448",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="_3-cocoapods\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-cocoapods\u5B89\u88C5" aria-hidden="true">#</a> 3. CocoaPods\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> cocoapods
<span class="token comment"># \u6216</span>
<span class="token function">sudo</span> gem <span class="token function">install</span> cocoapods

pod <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982Ruby\u7248\u672C\u4F4E\u5219\u9700\u8981\u4F7F\u7528rvm\u66F4\u65B0\u7248\u672C</p><p>\u5B89\u88C5rvm\u6B65\u9AA4\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> get.rvm.io <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> stable

<span class="token builtin class-name">source</span> ~/.bashrc

<span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rvm\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Brvm\u7248\u672C</span>
rvm <span class="token parameter variable">-v</span>

<span class="token comment"># \u5217\u51FAruby\u53EF\u5B89\u88C5\u7684\u7248\u672C\u4FE1\u606F</span>
rvm list known

<span class="token comment"># \u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C</span>
rvm <span class="token function">install</span> <span class="token number">2.7</span>.0
<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C</span>
rvm use <span class="token number">2.7</span>.0 <span class="token parameter variable">--default</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="_4-\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD0\u884C" aria-hidden="true">#</a> 4. \u8FD0\u884C</h2><p>\u8FD0\u884C\u65F6\u9700\u6CE8\u610F pods \u4E2D Deployment Target\u4E2DIOS\u7248\u672C\u4E0E Podfile \u4E2D\u4FDD\u6301\u4E00\u81F4</p><h2 id="_5-ios\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#_5-ios\u6253\u5305" aria-hidden="true">#</a> 5. IOS\u6253\u5305</h2><h3 id="_1-\u751F\u6210ipa\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u751F\u6210ipa\u5B89\u88C5\u5305" aria-hidden="true">#</a> 1. \u751F\u6210ipa\u5B89\u88C5\u5305</h3><ol><li><p>\u9996\u5148\u5728 Xcode \u4E2D\uFF0C\u5C06\u7F16\u8BD1\u7684\u76EE\u6807\u673A\u5668\u8BBE\u7F6E\u6210 \u201CiOS Device\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u201DProduct\u201D\u2013&gt;\u201CArchive\u201D\u3002</p></li><li><p>Archive \u6210\u529F\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728 Xcode \u7684 Organizer \u4E2D\u770B\u5230\u76F8\u5E94\u7684\u6587\u4EF6\u3002\u63A5\u4E0B\u6765\u70B9\u51FB Archive Information \u4E2D\u7684 \u201CDistribute App\u201D</p></li><li><p>\u5728\u5F39\u51FA\u754C\u9762\u4E2D\u9700\u8981\u9009\u62E9\u8BC1\u4E66\u7C7B\u578B\uFF0C\u9009\u62E9\u65B9\u5F0F\u5982\u4E0B\uFF1AAdHoc(\u6D4B\u8BD5\u8BC1\u4E66)\u9009\u9879</p></li><li><p>\u9009\u62E9\u5B8C\u6210\u540E\u70B9 Next\uFF0CXcode \u4F1A\u81EA\u52A8\u5C06\u6D4B\u8BD5\u8BBE\u5907\u7684\u7B7E\u540D\u4FE1\u606F\u9644\u52A0\u4E0A\uFF0C\u5E76\u5C06\u76F8\u5E94\u7684 IPA \u6587\u4EF6\u5BFC\u51FA</p></li></ol>`,8),b={href:"https://blog.csdn.net/lizujun123/article/details/103937668",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),f={href:"https://www.pgyer.com/doc/view/build_ipa",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"_2-\u7B7E\u540D-\u5982\u672A\u7B7E\u540D\u53EF\u80FD\u5F15\u8D77\u95EA\u9000",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u7B7E\u540D-\u5982\u672A\u7B7E\u540D\u53EF\u80FD\u5F15\u8D77\u95EA\u9000","aria-hidden":"true"},"#"),e(" 2. \u7B7E\u540D(\u5982\u672A\u7B7E\u540D\u53EF\u80FD\u5F15\u8D77\u95EA\u9000)")],-1),g=n("li",null,[n("p",null,"\u5728\u82F9\u679C\u5F00\u53D1\u8005\u5B98\u7F51\u4E0B\u8F7D\u5BF9\u5E94\u7684 ***.Provisioning \u6587\u4EF6")],-1),x=n("li",null,[n("p",null,[e("\u5728Mac\u7684\u94A5\u5319\u4E32\u5E94\u7528\u4E2D\u9009\u62E9\u6211\u7684\u8BC1\u4E66\u5BFC\u51FA\u5BF9\u5E94\u7684"),n("strong",null,"p12\u8BC1\u4E66\u6587\u4EF6"),e("\uFF0C\u5E76\u8BB0\u4F4F\u8F93\u5165\u7684\u5BC6\u7801")])],-1),w={href:"https://www.i4.cn/",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,[n("p",null,[e("\u5728\u4F9D\u6B21\u70B9\u51FB"),n("strong",null,"\u5DE5\u5177\u7BB1"),e(" -> "),n("strong",null,"IPA\u7B7E\u540D"),e(" \u6309\u7167\u8981\u6C42\u4E0A\u4F20\u5BF9\u5E94\u6587\u4EF6\u5373\u53EF")])],-1),I=i('<h3 id="_3-\u5B89\u88C5\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u6D4B\u8BD5" aria-hidden="true">#</a> 3. \u5B89\u88C5\u6D4B\u8BD5</h3><h4 id="\u4F7F\u7528xcode\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528xcode\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528Xcode\u5B89\u88C5</h4><ol><li><p>\u6253\u5F00<strong>XCode</strong>\u4F9D\u6B21\u70B9\u51FB Window -&gt; Devices and Simulators\u3002</p></li><li><p>\u9009\u62E9Devices &gt; \u70B9\u51FB\u4E0B\u65B9 <strong>+</strong> \uFF0C\u9009\u62E9IPA\u6587\u4EF6\u5373\u53EF</p></li></ol>',3),S=n("p",null,[n("strong",null,"\u5176\u4ED6\u65B9\u5F0F")],-1),D={href:"http://sign.fengchetech.cn/",target:"_blank",rel:"noopener noreferrer"},O=n("li",null,"\u4F7F\u7528\u7231\u601D\u52A9\u624B\u5B89\u88C5",-1),P=i('<h2 id="_6-ios\u5E94\u7528\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#_6-ios\u5E94\u7528\u53D1\u5E03" aria-hidden="true">#</a> 6. IOS\u5E94\u7528\u53D1\u5E03</h2><h3 id="appstore\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#appstore\u53D1\u5E03" aria-hidden="true">#</a> AppStore\u53D1\u5E03</h3><h4 id="\u8BC1\u4E66\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66\u95EE\u9898" aria-hidden="true">#</a> \u8BC1\u4E66\u95EE\u9898</h4><p><strong>\u62A5\u9519\uFF1A</strong> <code>ITMS-90034: Missing or invalid signature - The bundle &#39;...&#39; at bundle path &#39;Payload/...&#39; is not signed using an Apple submission certificate.</code></p>',4),z=n("strong",null,"\u5206\u6790\uFF1A",-1),M=n("br",null,null,-1),N=n("strong",null,"\u89E3\u51B3\u65B9\u6CD5\uFF1A",-1),X={href:"https://developer.apple.com/cn/support/code-signing/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.apple.com/certificateauthority/",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"Apple Intermediate Certificates",-1),C=n("strong",null,"Worldwide Developer Relations - G3",-1),H=n("br",null,null,-1),R=n("strong",null,"\u53C2\u8003",-1),L={href:"https://cloud.tencent.com/developer/article/1958380",target:"_blank",rel:"noopener noreferrer"};function T(V,W){const a=t("ExternalLinkIcon");return o(),r("div",null,[d,p,n("p",null,[e("Xcode\u7248\u672C\u9700\u548CMacOS\u7248\u672C\u5339\u914D\uFF0C\u5BF9\u5E94\u5173\u7CFB\u53CA\u4E0B\u8F7D\u5730\u5740"),n("a",u,[e("\u53C2\u8003"),s(a)])]),h,n("p",null,[n("a",m,[e("Homebrew\u56FD\u5185\u955C\u50CF\u6E90\u6587\u6863\u53C2\u8003"),s(a)])]),v,n("blockquote",null,[n("p",null,[e("\u6253\u5305\u914D\u7F6E\u8FC7\u7A0B"),n("a",b,[e("\u53C2\u8003"),s(a)]),_,e(" \u751F\u6210ipa\u6587\u4EF6"),n("a",f,[e("\u53C2\u8003"),s(a)])])]),k,n("ol",null,[g,x,n("li",null,[n("p",null,[e("\u4E0B\u8F7D "),n("strong",null,[n("a",w,[e("\u7231\u601D\u52A9\u624B"),s(a)])])])]),A]),I,n("blockquote",null,[S,n("ol",null,[n("li",null,[n("a",D,[e("\u98CE\u8F66\u7B7E\u540D\u7BA1\u7406"),s(a)])]),O])]),P,n("p",null,[z,e(" \u8BE5\u62A5\u9519\u4E3A\u8BC1\u4E66\u4E0D\u53D7\u4FE1\u4EFB\u5BFC\u81F4\u7684"),M,N,e(" \u91CD\u65B0\u5B89\u88C5"),n("a",X,[e("AppleWWDRCA"),s(a)]),e("\uFF0C\u4E0B\u8F7D"),n("a",q,[e("\u9875\u9762"),s(a)]),e("\u9009\u62E9"),y,e("\u4E0B\u7684"),C,e("\u4E0B\u8F7D\u53CC\u51FB\u5B89\u88C5\u5373\u53EF\u3002"),H,R,e("\uFF1A "),n("a",L,[e("\u89E3\u51B3iOS \u8BC1\u4E66\u4E0D\u53D7\u4FE1\u4EFB\u7684\u95EE\u9898"),s(a)])])])}const E=l(c,[["render",T],["__file","mac-rn.html.vue"]]);export{E as default};
