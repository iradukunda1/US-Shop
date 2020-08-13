<template>
  <div class="customer-service w-100 bg-grey">
    <div class="image-container w-100 d-inline-flex">
      <img
        class="customer-images w-100 h-100 d-block"
        src="/img/account-plant.png"
      />
      <div
        class="row justify-content-center position-absolute image-text-desc w-100 m-0"
      >
        <div class="text-container w-95 pt-2">
          <p class="mx-2 text-center text-white text-header mb-0">
            Customer Service
          </p>
          <p class="text-center text-white py-2 font-weight-bold fa-16">
            At S.U-Bouquets your satisfaction is our priority
          </p>
          <button
            class="btn order-status-button rounded-0 py-3 px-4 fa-14 mx-auto font-weight-bold d-flex"
          >
            TRACK YOUR ORDER
          </button>
        </div>
      </div>
    </div>
    <div
      class="account-orders-cards row mx-0 w-100 px-4 justify-content-around py-4"
    >
      <div
        class="my-order-card  border roundend-0 px-4 py-4 bg-white row mx-0"
      >
        <div class="order-links-container">
          <div class="font-weight-bold fa-15 pb-3 mb-3">Your Order</div>
          <p class="text-info mb-0 pb-3 cursor-pointer font-weight-bold">
            Check your order status
          </p>
          <p class="text-info cursor-pointer font-weight-bold">
            Contact Us: Issue with my order
          </p>
        </div>
        <div class="order-logo-container my-auto m l-5 pl-4">
          <p class="logo-background rounded-circle  d-inline-flex">
            <i class="fas fa-box-open text-white m-auto"></i>
          </p>
        </div>
      </div>
      <div
        class="my-account-card border roundend-0 px-4 py-4 bg-white mx-0 row"
      >
        <div class="account-links-container">
          <div class="font-weight-bold fa-15 pb-3 mb-3">Your Account</div>
          <p
            class="text-info mb-0 pb-3 cursor-pointer font-weight-bold"
            @click="$store.dispatch('setView', 'Login')"
          >
            Log in
          </p>
          <p
            class="text-info cursor-pointer font-weight-bold"
            @click="$store.dispatch('setView', 'Login')"
          >
            Open a new account
          </p>
          <p class="text-info cursor-pointer font-weight-bold">
            I forgot my password
          </p>
        </div>
        <div class="account-logo-container ml-5 pl-4 my-auto ">
          <p class="logo-background rounded-circle  d-inline-flex">
            <i class="fas fa-user-alt text-white mx-auto mt-4"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="help-content-container w-100 bg-white pt-5">
      <div class="help-question-container pt-4 w-75 mx-auto">
        <div class="frequently-questions">
          <div class="question-header text-center pb-4">
            <p class="h1">Frequently Asked Questions</p>
            <p>
              Search for FAQs using keywords or review the most commonly asked
              questions below.
            </p>
          </div>
          <div class="payment-option-help border-top py-3">
            <p
              class="row w-100 mx-0 justify-content-between cursor-pointer mb-0 pr-2"
              @click="payment = !payment"
            >
              <span class="font-weight-bold fa-16"
                >PAYMENT OPTIONS AND FEES</span
              >
              <i class="fas fa-plus text-info fa-14" v-if="!payment"></i>
              <i class="fas fa-minus text-info fa-14" v-if="payment"></i>
            </p>
            <div class="payment-content py-3 pr-4" v-if="payment">
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                What do the service fees cover?
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                Our service fees cover all costs associated with the delivery
                and servicing of your gift. It also covers our seven day
                satisfaction guarantee.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                How do I request tax exemption?
              </p>
              <p class="mb-0 text-justify pb-1 fa-14">
                If you are a tax exempt organization, please fax the necessary
                documents to our Finance team at 630-724-6019 ATTN: Emily. If
                you do not have access to a fax machine, please call or email
                us.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                How do I apply my Groupon or gift card?
              </p>
              <p class="mb-0 text-justify pb-1 fa-14">
                To enter your code, fill out your recipient information and
                proceed to the payment page. Under “Select Payment Method”,
                click “Redeem a payment code or Groupon Voucher”. Enter the
                information and then select “Apply”. You will see the code
                applied at the order total breakdown at checkout.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                Installments by Afterpay
              </p>
              <p class="mb-0 text-justify pb-1 fa-14">
                Installments by Afterpay is a service that allows you to make
                purchases now and pay for them in four payments made every 2
                weeks without any interest.
              </p>
              <p class="mb-0 text-justify pb-1 fa-14">
                At checkout, you will be given the option to select Afterpay as
                your payment method. First-time customers will need to register
                with Afterpay and provide payment details. Returning customers
                can log in and make their purchase.
              </p>
              <p class="mb-0 text-justify pb-1 fa-14">
                Afterpay is only offered to customers with a US billing address,
                shipping address, payment method, and phone number. It is not
                available for the purchase of gift cards.
              </p>
            </div>
          </div>
          <div class="our-policy border-top py-3">
            <p
              class="row w-100 mx-0 justify-content-between cursor-pointer mb-0 pr-2"
              @click="policy = !policy"
            >
              <span class="font-weight-bold fa-16">POLICIES</span>
              <i class="fas fa-plus text-info fa-14" v-if="!policy"></i>
              <i class="fas fa-minus text-info fa-14" v-if="policy"></i>
            </p>
            <div class="policies-content py-3 pr-4" v-if="policy">
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                COVID-19 Contactless Delivery Policy
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                We are still operating and taking orders! We take the safety of
                our customers, staff, and partners very seriously, which is why
                all products will be shipped and delivered using a no-contact
                method.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                In this process, our partner florists will first call your
                recipient to advise them that their gift is on the way. The
                florist will then maintain social distancing and leave the gift
                at a safe location at the delivery address. Furthermore, no
                signatures will be required for these deliveries.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If the florist cannot confirm that the recipient is available,
                they will leave a voicemail and notify us to schedule a
                re-delivery.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                My order doesn’t look like the photo
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                Our partner florists fill each order according to a recipe and
                make their arrangements as similar as possible, with respect to
                our substitution policy. However, there are times when further
                substitutions are required in order to ensure the timely
                delivery of your gift.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If, for some reason, you or your recipient are not satisfied
                with the quality of your arrangement, please reach out to us so
                that we can schedule a fresh re-delivery or full refund.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                Anonymous Flower Delivery
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If there is no signature on the gift message, the sender may
                have accidentally left the card unsigned or they may have wanted
                to remain anonymous. As per our company policy, we do not
                release our customer's information without their consent. Please
                contact us and we will reach out to the sender to request the
                release of their information.
              </p>
            </div>
          </div>
          <div class="our-policy border-top py-3">
            <p
              class="row w-100 mx-0 justify-content-between cursor-pointer mb-0 pr-2"
              @click="delivery = !delivery"
            >
              <span class="font-weight-bold fa-16">DELIVERIES</span>
              <i class="fas fa-plus text-info fa-14" v-if="!delivery"></i>
              <i class="fas fa-minus text-info fa-14" v-if="delivery"></i>
            </p>
            <div class="delivery-content py-3 pr-4" v-if="delivery">
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                How can I track my order?
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                To track your order, please select the “Help” icon in the top
                right hand corner of our website and select “Track your Order”.
                From there, you will be prompted to enter your order number and
                the last name of your recipient.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If you do not know your order number, please check your email
                inbox from the order confirmation message that we sent when your
                order was placed. You can also find this information by signing
                into your account and accessing your order history.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If you require additional assistance, please contact a member of
                our team. Please note that real-time tracking is unavailable for
                florist deliveries during peak holiday weeks.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                What time will my order be delivered?
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                For businesses, our partner florists will delivery any time
                between 9 AM and 6 PM. For residences, they will deliver between
                9 AM and 8 PM (up to 9 PM on holidays). We will email you a
                confirmation as soon as the delivery is made.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                Unfortunately, we are unable to guarantee specific delivery
                times. This is because our partners deliver to funerals first,
                then hospitals, then businesses, and lastly residences. If you
                have a specific time constraint, please reach out to us so that
                we can make a request or assist with other accommodations.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                I received a delivery confirmation email, but my order has not
                arrived yet.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                When our partner florists and vendors deliver your gift, they
                notify us via a message in our system, which then automatically
                sends a delivery confirmation email to you.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If you, for some reason, received a confirmation email, but the
                gift was not received, do not panic! If it is still the
                scheduled delivery date, it is possible that the florist has
                just left the shop and will deliver your gift as scheduled.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                However, if you received this notification on any date other
                than your selected delivery date, please contact us as soon as
                possible so that we can investigate further and ensure that
                there are no complications.
              </p>
              <p class="fa-14 font-weight-bold mb-0 pb-1">
                My order was not delivered.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                Please advise that the delivery window for residences is from 9
                AM to 8 PM. During peak holiday weeks, deliveries may occur
                until 9 PM.
              </p>
              <p class="text-justify mb-0 pb-1 fa-14">
                If the delivery date has already passed, please contact a member
                of our team so that we can make things right.
              </p>
            </div>
          </div>
          <div class="other-help border-top py-3 border-bottom">
            <p
              class="row w-100 mx-0 justify-content-between cursor-pointer mb-0 pr-2"
              @click="satitsty = !satitsty"
            >
              <span class="font-weight-bold fa-16"
                >WHAT IF I’M NOT SATISFIED WITH MY ORDER?</span
              >
              <i class="fas fa-plus text-info fa-14" v-if="!satitsty"></i>
              <i class="fas fa-minus text-info fa-14" v-if="satitsty"></i>
            </p>
            <div class="satitsty-content py-3 pr-4" v-if="satitsty">
              <p class="text-justify mb-0 pb-1 fa-14">
                We guarantee your satisfaction! Your flowers, plants or any
                other preserved items are guaranteed to last at least seven days
                (potted plants have an extended guarantee of 14 days). If for
                any reason you are not satisfied with the freshness of your gift
                or about any of our items, including our gourmet products,
                please contact us and we will gladly replace it or refund your
                money.
              </p>
            </div>
          </div>
        </div>
        <div class="contact-help  py-5 w-75 mx-auto">
          <div class="contact-content text-center py-5 ">
            <p class="h2">Still need help? Reach out to support 24/7:</p>
            <p>
              <i class="fas fa-calculator pr-2"></i>
              <span class="cursor-pointer font-weight-bold text-black-50"
                >(+250)-78063334098</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="warning-container border-top w-100 px-5 py-5">
        <p class="h3 font-weight-bold text-warning px-5 pb-4">
          IMPORTANT WARNINGS
        </p>
        <ul class="ml-5 fa-16 font-weight-lighter">
          <li>
            Not Fit For Consumption – Flowers and Plants are not fit for
            consumption. Please keep them out of reach of children or animals.
          </li>
          <li class="py-1">
            Choking Hazard – Children under 12 years can choke or suffocate on
            uninflated or broken balloons. Adult supervision required. Keep
            uninflated balloons from children. Discard broken balloons at once.
          </li>
          <li>Choking Hazard – Small parts not for children under 3 years.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customer-service",
  data() {
    return {
      payment: false,
      policy: false,
      delivery: false,
      satitsty: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.customer-service {
  .image-container {
    height: 20rem;
  }
  .image-text-desc {
    .text-container {
      .text-header {
        font-size: 4rem;
        font-weight: 500;
        font-family: serif;
      }
      .order-status-button {
        color: rgb(0, 124, 173);
        background: white;
        cursor: pointer;
        &:hover {
          color: white;
          background: rgb(0, 124, 173);
        }
      }
    }
  }
  .my-order-card {
    .order-logo-container {
      .logo-background {
        width: 150px;
        height: 150px;
        border: transparent;
        background: rgb(0, 124, 173);
        text-align: center;
        i {
          font-size: 5rem !important;
        }
      }
    }
    .order-links-container {
      p:hover {
        color: blue !important;
      }
    }
  }
  .my-account-card {
    .account-logo-container {
      .logo-background {
        width: 150px;
        height: 150px;
        border: transparent;
        background: rgb(0, 124, 173);
        text-align: center;
        i {
          font-size: 5rem !important;
        }
      }
    }
    .account-links-container {
      p:hover {
        color: blue !important;
      }
    }
  }
}
</style>
