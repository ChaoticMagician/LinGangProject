<template>
  <div>
    <!--<remote-js v-for="(js, index) in jsLibs" :src="js" :key="index"></remote-js>-->

    <form ref="form" id="formData">
      <link rel="stylesheet" type="text/css" href="../../../static/css/form.css">
      <link rel="stylesheet" type="text/css" href="../../../static/css/table.css">
      <link rel="stylesheet" type="text/css" href="../../../static/css/style.css">
      <div  v-html="formHtmlStr"></div>
    </form>
  </div>
</template>

<script>
  // import remoteJs from './remoteJs'
  // function getSciprt (html) {
  //   let srciptRegExp = /<script(?:(?!x\/template)[\s\S])*?>((?:[\s\S])*?)<\/script>/g;
  //   return function () {
  //     return srciptRegExp.exec(html);
  //   }
  // }
  // function createNewDom (tag, innerHtml, attrMap) {
  //   let newScriptDom = document.createElement(tag)
  //   for (let attr in attrMap) {
  //     newScriptDom[attr] = attrMap[attr]
  //   }
  //   newScriptDom.innerHTML = innerHtml
  //   return newScriptDom
  // }
  export default {
    name: 'form-html',
    props: {
      formHtmlStr: {
        type: String,
        required: true
      },
      formData: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        baseUrl: process.env.baseUrl,
        testData: '',
        customForm: null,
        jsLibs: [
          '/static/js/jquery.js',
          '/static/js/json2.js',
          '/static/js/zh_CN.js',
          '/static/js/rule.js',
          '/static/js/util.js',
          '/static/js/jquery.qtip.js',
          '/static/js/CustomForm.js',
          '/static/js/CustomValid.js'
        ]
      }
    },
    methods: {
      customSubmit () {
        // alert(this.customForm)
        this.$emit('update:formData', this.customForm.getData())
        console.log(JSON.parse(this.customForm.getData()))
      }
      // loadCss () {
      //   let formCssDom = createNewDom(
      //     'link',
      //     '',
      //     {
      //       href: '/static/css/form.css',
      //       rel: 'stylesheet'
      //     }
      //   )
      //   let tableCssDom = createNewDom(
      //     'link',
      //     '',
      //     {
      //       href: '/static/css/table.css'
      //     }
      //   )
      //   let styleCssDom = createNewDom(
      //     'link',
      //     '',
      //     {
      //       href: '/static/css/style.css',
      //       rel: 'stylesheet'
      //     }
      //   )
      //   let qtipCssDom = createNewDom(
      //     'link',
      //     '',
      //     {
      //       href: '/static/css/jquery.qtip.css',
      //       rel: 'stylesheet'
      //     }
      //   )
      //   setTimeout(() => {
      //     formData.appendChild(formCssDom)
      //     formData.appendChild(qtipCssDom)
      //     formData.appendChild(tableCssDom)
      //     formData.appendChild(styleCssDom)
      //   }, 0)
      // },
      // loadJavascript () {
      //   // alert($)
      //   let HTML = formData.innerHTML
      //   // console.log(HTML)
      //   let newScriptDomArr = []
      //   let produceScript = getSciprt(HTML)
      //   let scriptArr = []
      //   let oldScript = ''
      //   let jquery = document.createElement('script')
      //   let customForm = document.createElement('script')
      //   let CustomValid = document.createElement('script')
      //   let langJS = document.createElement('script')
      //   let rule = document.createElement('script')
      //   let util = document.createElement('script')
      //   let json2 = document.createElement('script')
      //   let qtip = document.createElement('script')
      //   json2.src = '/static/js/json2.js'
      //   jquery.src = '/static/js/jquery.js'
      //   customForm.src = '/static/js/CustomForm.js'
      //   CustomValid.src = '/static/js/CustomValid.js'
      //   langJS.src = '/static/js/zh_CN.js'
      //   rule.src = '/static/js/rule.js'
      //   util.src = '/static/js/util.js'
      //   qtip.src = '/static/js/jquery.qtip.js'
      //   /*
      //      push preScripts
      //   */
      //   newScriptDomArr.push({
      //     timeout: 0,
      //     script: jquery
      //   })
      //   newScriptDomArr.push({
      //     timeout: 0,
      //     script: langJS
      //   })
      //   newScriptDomArr.push({
      //     timeout: 200,
      //     script: util
      //   })
      //   newScriptDomArr.push({
      //     timeout: 200,
      //     script: json2
      //   })
      //   newScriptDomArr.push({
      //     timeout: 400,
      //     script: rule
      //   })
      //   newScriptDomArr.push({
      //     timeout: 800,
      //     script: CustomValid
      //   })
      //   newScriptDomArr.push({
      //     timeout: 800,
      //     script: qtip
      //   })
      //   newScriptDomArr.push({
      //     timeout: 1000,
      //     script: customForm
      //   })
      //   /**
      //    parsing js sustaining while true
      //    */
      //   while (scriptArr = produceScript()) {
      //     oldScript = scriptArr[1]
      //     if (oldScript) {
      //       let newScriptDom = createNewDom(
      //         'script',
      //         oldScript,
      //         {
      //           type: 'text/javascript'
      //         },
      //       )
      //       newScriptDomArr.push({
      //         timeout: 600,
      //         script: newScriptDom
      //       })
      //     }
      //   }
      //
      //   /*
      //     remove the jses those have been parsed
      //   */
      //   for (let i = 0; i < formData.children.length; i++) {
      //     if (formData.children[i].nodeName.toLowerCase() == "script"
      //       &&
      //       formData.children[i].type.toLowerCase() != "x/template"
      //     ) {
      //       formData.children[i].remove()
      //       i--
      //     }
      //   }
      //   /**
      //    add the parsed jses to the dom.
      //    */
      //   for (let index = 0; index < newScriptDomArr.length; index++) {
      //     let element = newScriptDomArr[index]
      //     setTimeout(() => {
      //       formData.appendChild(element.script)
      //       alert(customForm)
      //       // if (element.script === customForm) {
      //       //   alert(CustomForm)
      //       //   this.customForm = CustomForm
      //       //   alert(this.customForm)
      //       // }
      //       // alert(newScriptDomArr.length)
      //     }, element.timeout)
      //   }
      // }
      // testMethod: CustomForm.getData
    },
    mounted () {
      // alert(this.jsLibs[0])
      // console.log(CustomForm.getData)
      // alert(this.customForm)
      // this.loadJavascript()
      // eslint-disable-next-line
      this.customForm = CustomForm
      // alert(this.customForm)
      // if (CustomForm) {
      //   this.customForm = CustomForm
      // }
      // alert(this.customForm)
      // this.loadCss()
    },
    components: {
      // remoteCss
      // remoteJs
      // 'remote-js': {
      //   render (createElement) {
      //     return createElement('script', {attrs: {type: 'text/javascript', src: this.src}})
      //   },
      //   props: {
      //     src: {type: String, required: true}
      //   }
      // }
    }
  }
</script>

<style>
  span.red{
    color: red
  }
</style>
