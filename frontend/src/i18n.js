import anp from "@/../../messages/anp";
import ar from "@/../../messages/ar";
import ast from "@/../../messages/ast";
import az from "@/../../messages/az";
import ban from "@/../../messages/ban";
import bn from "@/../../messages/bn";
import br from "@/../../messages/br";
import ca from "@/../../messages/ca";
import crhLatn from "@/../../messages/crh-latn";
import cs from "@/../../messages/cs";
import de from "@/../../messages/de";
import diq from "@/../../messages/diq";
import el from "@/../../messages/el";
import enGb from "@/../../messages/en-gb";
import en from "@/../../messages/en";
import eo from "@/../../messages/eo";
import esFormal from "@/../../messages/es-formal";
import es from "@/../../messages/es";
import fa from "@/../../messages/fa";
import fi from "@/../../messages/fi";
import fr from "@/../../messages/fr";
import gu from "@/../../messages/gu";
import haw from "@/../../messages/haw";
import he from "@/../../messages/he";
import hi from "@/../../messages/hi";
import hifLatn from "@/../../messages/hif-latn";
import hr from "@/../../messages/hr";
import hu from "@/../../messages/hu";
import hy from "@/../../messages/hy";
import id from "@/../../messages/id";
import io from "@/../../messages/io";
import it from "@/../../messages/it";
import ja from "@/../../messages/ja";
import kab from "@/../../messages/kab";
import kiu from "@/../../messages/kiu";
import kn from "@/../../messages/kn";
import ko from "@/../../messages/ko";
import kuLatn from "@/../../messages/ku-latn";
import lb from "@/../../messages/lb";
import mk from "@/../../messages/mk";
import mnw from "@/../../messages/mnw";
import mrh from "@/../../messages/mrh";
import ms from "@/../../messages/ms";
import my from "@/../../messages/my";
import ne from "@/../../messages/ne";
import nl from "@/../../messages/nl";
import nn from "@/../../messages/nn";
import om from "@/../../messages/om";
import pa from "@/../../messages/pa";
import pl from "@/../../messages/pl";
import pms from "@/../../messages/pms";
import pnb from "@/../../messages/pnb";
import ptBr from "@/../../messages/pt-br";
import pt from "@/../../messages/pt";
import qqq from "@/../../messages/qqq";
import roaTara from "@/../../messages/roa-tara";
import ru from "@/../../messages/ru";
import sc from "@/../../messages/sc";
import scn from "@/../../messages/scn";
import sje from "@/../../messages/sje";
import sk from "@/../../messages/sk";
import skrArab from "@/../../messages/skr-arab";
import sl from "@/../../messages/sl";
import sq from "@/../../messages/sq";
import sv from "@/../../messages/sv";
import ta from "@/../../messages/ta";
import tcy from "@/../../messages/tcy";
import te from "@/../../messages/te";
import tly from "@/../../messages/tly";
import tr from "@/../../messages/tr";
import uk from "@/../../messages/uk";
import ur from "@/../../messages/ur";
import uz from "@/../../messages/uz";
import vec from "@/../../messages/vec";
import vi from "@/../../messages/vi";
import xmf from "@/../../messages/xmf";
import zgh from "@/../../messages/zgh";
import zhHans from "@/../../messages/zh-hans";
import zhHant from "@/../../messages/zh-hant";

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

let msgs = {
    "anp": anp,
    "ar": ar,
    "ast": ast,
    "az": az,
    "ban": ban,
    "bn": bn,
    "br": br,
    "ca": ca,
    "crh-latn": crhLatn,
    "cs": cs,
    "de": de,
    "diq": diq,
    "el": el,
    "en-gb": enGb,
    "en": en,
    "eo": eo,
    "es-formal": esFormal,
    "es": es,
    "fa": fa,
    "fi": fi,
    "fr": fr,
    "gu": gu,
    "haw": haw,
    "he": he,
    "hi": hi,
    "hif-latn": hifLatn,
    "hr": hr,
    "hu": hu,
    "hy": hy,
    "id": id,
    "io": io,
    "it": it,
    "ja": ja,
    "kab": kab,
    "kiu": kiu,
    "kn": kn,
    "ko": ko,
    "ku-latn": kuLatn,
    "lb": lb,
    "mk": mk,
    "mnw": mnw,
    "mrh": mrh,
    "ms": ms,
    "my": my,
    "ne": ne,
    "nl": nl,
    "nn": nn,
    "om": om,
    "pa": pa,
    "pl": pl,
    "pms": pms,
    "pnb": pnb,
    "pt-br": ptBr,
    "pt": pt,
    "qqq": qqq,
    "roa-tara": roaTara,
    "ru": ru,
    "sc": sc,
    "scn": scn,
    "sje": sje,
    "sk": sk,
    "skr-arab": skrArab,
    "sl": sl,
    "sq": sq,
    "sv": sv,
    "ta": ta,
    "tcy": tcy,
    "te": te,
    "tly": tly,
    "tr": tr,
    "uk": uk,
    "ur": ur,
    "uz": uz,
    "vec": vec,
    "vi": vi,
    "xmf": xmf,
    "zgh": zgh,
    "zh-hans": zhHans,
    "zh-hant": zhHant
}


export default new VueI18n({
    locale: localStorage.getItem('ws-bookread-lang') || 'en',
    fallbackLocale: 'en',
    messages: msgs
})

export const availableLanguage = Object.keys( msgs )