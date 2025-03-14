jQuery(document).ready(function ($) {
    // Toggle Open/Close Menu Event
    $(document).on('click', '.go-to-section', function(e){
        var target = $(this).data('target');

        if($(target).length > 0) {
            e.preventDefault();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(target).offset().top
            }, 300);
            return;
        }
    });
});
// Update Order page terms text
function update_terms_text(selectedProduct)
{
    var termsText = $('#termsContainer');
    var data = selectedProduct.data();
    data.days = ($("[name='OrderForm[payment_processor]']:checked").val() == "credit_card") ? 30 : 30;

    if(data.months == 'one-month') data.days *= 1;
    if(data.months == 'two-month') data.days *= 2;
    if(data.months == 'three-month') data.days *= 3;
    if(data.months == 'four-month') data.days *= 4;
    if(data.months == 'five-month') data.days *= 5;
    if(data.months == 'six-month') data.days *= 6;

    termsText.find('.name').html(data.name);
    termsText.find('.amount').html('$'+ data.amount);
    termsText.find('.day').html(data.days);
    termsText.find('.month').html(data.months);
}