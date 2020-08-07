<template>
	<div class="user-profile bg-white">
		<div class="container">
		    <ul class="nav nav-tabs nav-justified">
		      <li class="nav-item">
		        <a class="nav-link" @click.prevent="setActive('Profile')" :class="{ active: isActive('Profile') }" href="#Profile">Profile</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" @click.prevent="setActive('Orders')" :class="{ active: isActive('Orders') }" href="#Orders">Orders</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" @click.prevent="setActive('Address')" :class="{ active: isActive('Address') }" href="#Address">Address</a>
		      </li>
		    </ul>
		    <div class="tab-content py-3" id="myTabContent">
		      <div class="tab-pane fade" :class="{ 'active show': isActive('Profile') }" id="Profile">
		      	<profile/>
		      </div>
		      <div class="tab-pane fade" :class="{ 'active show': isActive('Orders') }" id="Orders">
		      	<orders/>
		      </div>
		      <div class="tab-pane fade" :class="{ 'active show': isActive('Address') }" id="Address">
		      	<address-table v-if="addressTable" @openAddressForm="hideTable"/>
		      	<div class="col-md-6 text-left mx-auto" v-else>
		      		<address-form/>
		      	</div>
		      </div>
		    </div>
  		</div>
	</div>
</template>
<script>
import Profile from '@/components/Profile.vue'
import Orders from '@/components/products/orders/orders.vue'
import AddressTable from '@/components/products/address/table.vue'
import AddressForm from '@/components/products/address/delivery-address-form.vue'
export default {
  components: { Profile, Orders, AddressTable, AddressForm },
  data () {
    return {
		  activeItem: 'Profile',
		  addressTable: true
    }
  },
  methods: {
	  	isActive (menuItem) {
	      return this.activeItem === menuItem
	    },
	    setActive (menuItem) {
	      this.activeItem = menuItem
	    },
	    hideTable () {
	      this.addressTable = false
	    }
  },
  created () {

  }
}
</script>
<style>
</style>
