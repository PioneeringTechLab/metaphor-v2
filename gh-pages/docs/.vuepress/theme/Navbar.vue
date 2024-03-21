<template>
  <div class="container-fluid">
    <nav class="navbar navbar-metaphor navbar-expand-md">
      <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> -->
      
      <a class="navbar-brand" href="/metaphorV2/"> 
        <span class="sr-only">CSUN Logo</span> 
        <span class="navbar-brand__subbrand">
          Metaphor
          <small>V2</small>
        </span>
      </a> 
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span> 
      </button> 
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup"> 
          
            <!-- <a class="nav-item nav-link active" href="#">Home</a> 
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>  -->




              <!-- <router-link
                :to="$localePath"
                class="nav-item nav-link"
              >
                <img
                  class="logo"
                  v-if="$site.themeConfig.logo"
                  :src="$withBase($site.themeConfig.logo)"
                  :alt="$siteTitle"
                >
                <span
                  ref="siteName"
                  class="site-name"
                  v-if="$siteTitle"
                  :class="{ 'can-hide': $site.themeConfig.logo }"
                >{{ $siteTitle }}</span>
              </router-link> -->

              <AlgoliaSearchBox
                v-if="isAlgoliaSearch"
                :options="algolia"
              />
              <SearchBox v-else-if="$site.themeConfig.search !== false"/>
              <NavLinks/>
        

      </div>    

    </nav>
  </div>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
@import './styles/config.styl'

$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  position relative
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    // font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
    .nav-links
      flex 1

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
