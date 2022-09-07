<div class="pagination">
   <ul>
    <li class="disalbed">1</li>
    <li>1</li>
    <li class="active">1</li>
    <li>...</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
   </ul>
</div>
<style lang="scss">
    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 112px;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                background-color:#282830;
                color: #c4c4c4;
                text-align: center;
                width: 34px;
                height: 34px;
                margin-right: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
            }
            li.active{
                color: #8257E6;
                border: 1px solid #8257E6;
            }
            li.disalbed{
                color: #545454;
                background-color: #282830;
            }
        }
    }
</style>