<template>
  <div class="contactUs bg-white pb-5">
    <div class="jumbotron jumbotron-sm">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <h3 class="h3">
              Contact us <small>Feel free to contact us</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="well well-sm">
            <form>
              <div class="row">
                <div class="col-md-6 text-left">
                  <div class="form-group">
                    <label for="name"> Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email"> Email Address</label>
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><span class="glyphicon glyphicon-envelope"></span>
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="subject"> Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      class="form-control"
                      required="required"
                    >
                      <option value="na" selected="">Choose One:</option>
                      <option value="service">General Customer Service</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="product">Product Support</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name"> Message</label>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="9"
                      cols="25"
                      required="required"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    type="submit"
                    class="btn btn-primary pull-right"
                    id="btnContactUs"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-4">
          <form>
            <legend>
              <span class="glyphicon glyphicon-globe"></span> Our office
            </legend>
            <address>
              <strong>Tsapal, Inc.</strong><br />
              Rwanda, Kigali<br />
              Remera, Kabuga<br />
              <b title="Phone"> Phone:</b>
              (250) 78-4141587
            </address>
            <address>
              <strong>Email</strong><br />
              <a href="mailto:#">tsapal@gmail.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
</script>
<style lang="css" scoped>
.jumbotron {
  background: #333358;
  color: white;
  border-radius: 0px;
}
.jumbotron-sm {
  padding-top: 24px;
  padding-bottom: 24px;
}
.jumbotron small {
  color: #fff;
}
.h3 small {
  font-size: 20px;
}
</style>
