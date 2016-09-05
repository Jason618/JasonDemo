#Data bingding
##compute property
> computed
> $watch
> computed setter
#Class and style binding
> v-bind:class
> v-bind:class='classObject'
> class={{ className }} not recommend
> v-bind:style='styleObject'
>> auto-prefixing
#conditional rendering
> demo
    {{#if ok}}
    <h1>yes</h1>
    {{/if}}
    or
    <h1 v-if={{ ok }}>yes</h1>
> v-show
> v-if
> v-else
#遍历
> v-for
    <ul>
        <li v-for={{ todo in todos }}>
            {{ todo.text }}
        </li>
    </ul>
> $index  数组的索引
> object v-for

#方法与事件绑定
>methods
>v-on:click
>$event
>v-on:keyup.enter
>> * enter
   * tab ,delete,esc,space,up,down,left,right

#表单input绑定
>v-model={{ message }}
>text,checkbox,select,radio
>lazy
>number
>debounce

#transitions

#组件
>组件注册
    var myComponent = Vue.extend({
        //options
    });
    Vue.component('my-component',myComponent);
--------
    <div id="example">
        <my-component></my-component>
    </div>
    var myComponent = Vue.extend({
            //options
        template: '<div>this is a component</div>'
    });
    Vue.component('my-component',myComponent);
    new Vue({
        el: '#example'
    });

>props
>>通过props传递数据
    Vue.component('child',{
        props: ['message'],
        template: '<span>{{ message }}</span>'
    });
>>动态Props
>>prop  验证
>>> string number boolean function object array
>父-子组件通信
>> this.$parent   parent component
>> this.$root   root vue
>> this.$children    array





