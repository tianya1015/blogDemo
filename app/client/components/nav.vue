<template>
    <nav id="sidebar" class="behavior_1">
        <div class="wrap">
            <div class="profile">
                <router-link to="/"><img src="/public/1.jpg" alt=""></router-link>
                <span>博客</span>
            </div>
            <ul class="buttons">
                <li>
                    <router-link to="/"><i class="icon icon-home"></i><span>首页</span></router-link>
                </li>

                <li>
                    <router-link to="/articles"><i class="icon icon-list"></i><span>列表页</span></router-link>
                </li>

                <li>
                    <router-link to="/tags"><i class="icon icon-tag"></i><span>标签</span></router-link>
                </li>

                <li>
                    <router-link to="/about"><i class="icon icon-user"></i><span>关于</span></router-link>
                </li>

                <li>
                    <router-link to="/links"><i class="icon icon-link"></i><span>友链</span></router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>
