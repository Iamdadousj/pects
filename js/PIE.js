/**
 * Created by Administrator on 2018/1/29.
 */
$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});