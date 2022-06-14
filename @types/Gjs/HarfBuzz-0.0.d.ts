/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * HarfBuzz-0.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum aat_layout_feature_selector_t {
    INVALID,
    ALL_TYPE_FEATURES_ON,
    ALL_TYPE_FEATURES_OFF,
    REQUIRED_LIGATURES_ON,
    REQUIRED_LIGATURES_OFF,
    COMMON_LIGATURES_ON,
    COMMON_LIGATURES_OFF,
    RARE_LIGATURES_ON,
    RARE_LIGATURES_OFF,
    LOGOS_ON,
    LOGOS_OFF,
    REBUS_PICTURES_ON,
    REBUS_PICTURES_OFF,
    DIPHTHONG_LIGATURES_ON,
    DIPHTHONG_LIGATURES_OFF,
    SQUARED_LIGATURES_ON,
    SQUARED_LIGATURES_OFF,
    ABBREV_SQUARED_LIGATURES_ON,
    ABBREV_SQUARED_LIGATURES_OFF,
    SYMBOL_LIGATURES_ON,
    SYMBOL_LIGATURES_OFF,
    CONTEXTUAL_LIGATURES_ON,
    CONTEXTUAL_LIGATURES_OFF,
    HISTORICAL_LIGATURES_ON,
    HISTORICAL_LIGATURES_OFF,
    UNCONNECTED,
    PARTIALLY_CONNECTED,
    CURSIVE,
    UPPER_AND_LOWER_CASE,
    ALL_CAPS,
    ALL_LOWER_CASE,
    SMALL_CAPS,
    INITIAL_CAPS,
    INITIAL_CAPS_AND_SMALL_CAPS,
    SUBSTITUTE_VERTICAL_FORMS_ON,
    SUBSTITUTE_VERTICAL_FORMS_OFF,
    LINGUISTIC_REARRANGEMENT_ON,
    LINGUISTIC_REARRANGEMENT_OFF,
    MONOSPACED_NUMBERS,
    PROPORTIONAL_NUMBERS,
    THIRD_WIDTH_NUMBERS,
    QUARTER_WIDTH_NUMBERS,
    WORD_INITIAL_SWASHES_ON,
    WORD_INITIAL_SWASHES_OFF,
    WORD_FINAL_SWASHES_ON,
    WORD_FINAL_SWASHES_OFF,
    LINE_INITIAL_SWASHES_ON,
    LINE_INITIAL_SWASHES_OFF,
    LINE_FINAL_SWASHES_ON,
    LINE_FINAL_SWASHES_OFF,
    NON_FINAL_SWASHES_ON,
    NON_FINAL_SWASHES_OFF,
    SHOW_DIACRITICS,
    HIDE_DIACRITICS,
    DECOMPOSE_DIACRITICS,
    NORMAL_POSITION,
    SUPERIORS,
    INFERIORS,
    ORDINALS,
    SCIENTIFIC_INFERIORS,
    NO_FRACTIONS,
    VERTICAL_FRACTIONS,
    DIAGONAL_FRACTIONS,
    PREVENT_OVERLAP_ON,
    PREVENT_OVERLAP_OFF,
    HYPHENS_TO_EM_DASH_ON,
    HYPHENS_TO_EM_DASH_OFF,
    HYPHEN_TO_EN_DASH_ON,
    HYPHEN_TO_EN_DASH_OFF,
    SLASHED_ZERO_ON,
    SLASHED_ZERO_OFF,
    FORM_INTERROBANG_ON,
    FORM_INTERROBANG_OFF,
    SMART_QUOTES_ON,
    SMART_QUOTES_OFF,
    PERIODS_TO_ELLIPSIS_ON,
    PERIODS_TO_ELLIPSIS_OFF,
    HYPHEN_TO_MINUS_ON,
    HYPHEN_TO_MINUS_OFF,
    ASTERISK_TO_MULTIPLY_ON,
    ASTERISK_TO_MULTIPLY_OFF,
    SLASH_TO_DIVIDE_ON,
    SLASH_TO_DIVIDE_OFF,
    INEQUALITY_LIGATURES_ON,
    INEQUALITY_LIGATURES_OFF,
    EXPONENTS_ON,
    EXPONENTS_OFF,
    MATHEMATICAL_GREEK_ON,
    MATHEMATICAL_GREEK_OFF,
    NO_ORNAMENTS,
    DINGBATS,
    PI_CHARACTERS,
    FLEURONS,
    DECORATIVE_BORDERS,
    INTERNATIONAL_SYMBOLS,
    MATH_SYMBOLS,
    NO_ALTERNATES,
    DESIGN_LEVEL1,
    DESIGN_LEVEL2,
    DESIGN_LEVEL3,
    DESIGN_LEVEL4,
    DESIGN_LEVEL5,
    NO_STYLE_OPTIONS,
    DISPLAY_TEXT,
    ENGRAVED_TEXT,
    ILLUMINATED_CAPS,
    TITLING_CAPS,
    TALL_CAPS,
    TRADITIONAL_CHARACTERS,
    SIMPLIFIED_CHARACTERS,
    JIS1978_CHARACTERS,
    JIS1983_CHARACTERS,
    JIS1990_CHARACTERS,
    TRADITIONAL_ALT_ONE,
    TRADITIONAL_ALT_TWO,
    TRADITIONAL_ALT_THREE,
    TRADITIONAL_ALT_FOUR,
    TRADITIONAL_ALT_FIVE,
    EXPERT_CHARACTERS,
    JIS2004_CHARACTERS,
    HOJO_CHARACTERS,
    NLCCHARACTERS,
    TRADITIONAL_NAMES_CHARACTERS,
    LOWER_CASE_NUMBERS,
    UPPER_CASE_NUMBERS,
    PROPORTIONAL_TEXT,
    MONOSPACED_TEXT,
    HALF_WIDTH_TEXT,
    THIRD_WIDTH_TEXT,
    QUARTER_WIDTH_TEXT,
    ALT_PROPORTIONAL_TEXT,
    ALT_HALF_WIDTH_TEXT,
    NO_TRANSLITERATION,
    HANJA_TO_HANGUL,
    HIRAGANA_TO_KATAKANA,
    KATAKANA_TO_HIRAGANA,
    KANA_TO_ROMANIZATION,
    ROMANIZATION_TO_HIRAGANA,
    ROMANIZATION_TO_KATAKANA,
    HANJA_TO_HANGUL_ALT_ONE,
    HANJA_TO_HANGUL_ALT_TWO,
    HANJA_TO_HANGUL_ALT_THREE,
    NO_ANNOTATION,
    BOX_ANNOTATION,
    ROUNDED_BOX_ANNOTATION,
    CIRCLE_ANNOTATION,
    INVERTED_CIRCLE_ANNOTATION,
    PARENTHESIS_ANNOTATION,
    PERIOD_ANNOTATION,
    ROMAN_NUMERAL_ANNOTATION,
    DIAMOND_ANNOTATION,
    INVERTED_BOX_ANNOTATION,
    INVERTED_ROUNDED_BOX_ANNOTATION,
    FULL_WIDTH_KANA,
    PROPORTIONAL_KANA,
    FULL_WIDTH_IDEOGRAPHS,
    PROPORTIONAL_IDEOGRAPHS,
    HALF_WIDTH_IDEOGRAPHS,
    CANONICAL_COMPOSITION_ON,
    CANONICAL_COMPOSITION_OFF,
    COMPATIBILITY_COMPOSITION_ON,
    COMPATIBILITY_COMPOSITION_OFF,
    TRANSCODING_COMPOSITION_ON,
    TRANSCODING_COMPOSITION_OFF,
    NO_RUBY_KANA,
    RUBY_KANA,
    RUBY_KANA_ON,
    RUBY_KANA_OFF,
    NO_CJK_SYMBOL_ALTERNATIVES,
    CJK_SYMBOL_ALT_ONE,
    CJK_SYMBOL_ALT_TWO,
    CJK_SYMBOL_ALT_THREE,
    CJK_SYMBOL_ALT_FOUR,
    CJK_SYMBOL_ALT_FIVE,
    NO_IDEOGRAPHIC_ALTERNATIVES,
    IDEOGRAPHIC_ALT_ONE,
    IDEOGRAPHIC_ALT_TWO,
    IDEOGRAPHIC_ALT_THREE,
    IDEOGRAPHIC_ALT_FOUR,
    IDEOGRAPHIC_ALT_FIVE,
    CJK_VERTICAL_ROMAN_CENTERED,
    CJK_VERTICAL_ROMAN_HBASELINE,
    NO_CJK_ITALIC_ROMAN,
    CJK_ITALIC_ROMAN,
    CJK_ITALIC_ROMAN_ON,
    CJK_ITALIC_ROMAN_OFF,
    CASE_SENSITIVE_LAYOUT_ON,
    CASE_SENSITIVE_LAYOUT_OFF,
    CASE_SENSITIVE_SPACING_ON,
    CASE_SENSITIVE_SPACING_OFF,
    ALTERNATE_HORIZ_KANA_ON,
    ALTERNATE_HORIZ_KANA_OFF,
    ALTERNATE_VERT_KANA_ON,
    ALTERNATE_VERT_KANA_OFF,
    NO_STYLISTIC_ALTERNATES,
    STYLISTIC_ALT_ONE_ON,
    STYLISTIC_ALT_ONE_OFF,
    STYLISTIC_ALT_TWO_ON,
    STYLISTIC_ALT_TWO_OFF,
    STYLISTIC_ALT_THREE_ON,
    STYLISTIC_ALT_THREE_OFF,
    STYLISTIC_ALT_FOUR_ON,
    STYLISTIC_ALT_FOUR_OFF,
    STYLISTIC_ALT_FIVE_ON,
    STYLISTIC_ALT_FIVE_OFF,
    STYLISTIC_ALT_SIX_ON,
    STYLISTIC_ALT_SIX_OFF,
    STYLISTIC_ALT_SEVEN_ON,
    STYLISTIC_ALT_SEVEN_OFF,
    STYLISTIC_ALT_EIGHT_ON,
    STYLISTIC_ALT_EIGHT_OFF,
    STYLISTIC_ALT_NINE_ON,
    STYLISTIC_ALT_NINE_OFF,
    STYLISTIC_ALT_TEN_ON,
    STYLISTIC_ALT_TEN_OFF,
    STYLISTIC_ALT_ELEVEN_ON,
    STYLISTIC_ALT_ELEVEN_OFF,
    STYLISTIC_ALT_TWELVE_ON,
    STYLISTIC_ALT_TWELVE_OFF,
    STYLISTIC_ALT_THIRTEEN_ON,
    STYLISTIC_ALT_THIRTEEN_OFF,
    STYLISTIC_ALT_FOURTEEN_ON,
    STYLISTIC_ALT_FOURTEEN_OFF,
    STYLISTIC_ALT_FIFTEEN_ON,
    STYLISTIC_ALT_FIFTEEN_OFF,
    STYLISTIC_ALT_SIXTEEN_ON,
    STYLISTIC_ALT_SIXTEEN_OFF,
    STYLISTIC_ALT_SEVENTEEN_ON,
    STYLISTIC_ALT_SEVENTEEN_OFF,
    STYLISTIC_ALT_EIGHTEEN_ON,
    STYLISTIC_ALT_EIGHTEEN_OFF,
    STYLISTIC_ALT_NINETEEN_ON,
    STYLISTIC_ALT_NINETEEN_OFF,
    STYLISTIC_ALT_TWENTY_ON,
    STYLISTIC_ALT_TWENTY_OFF,
    CONTEXTUAL_ALTERNATES_ON,
    CONTEXTUAL_ALTERNATES_OFF,
    SWASH_ALTERNATES_ON,
    SWASH_ALTERNATES_OFF,
    CONTEXTUAL_SWASH_ALTERNATES_ON,
    CONTEXTUAL_SWASH_ALTERNATES_OFF,
    DEFAULT_LOWER_CASE,
    LOWER_CASE_SMALL_CAPS,
    LOWER_CASE_PETITE_CAPS,
    DEFAULT_UPPER_CASE,
    UPPER_CASE_SMALL_CAPS,
    UPPER_CASE_PETITE_CAPS,
    HALF_WIDTH_CJK_ROMAN,
    PROPORTIONAL_CJK_ROMAN,
    DEFAULT_CJK_ROMAN,
    FULL_WIDTH_CJK_ROMAN,
}
export enum aat_layout_feature_type_t {
    INVALID,
    ALL_TYPOGRAPHIC,
    LIGATURES,
    CURISVE_CONNECTION,
    LETTER_CASE,
    VERTICAL_SUBSTITUTION,
    LINGUISTIC_REARRANGEMENT,
    NUMBER_SPACING,
    SMART_SWASH_TYPE,
    DIACRITICS_TYPE,
    VERTICAL_POSITION,
    FRACTIONS,
    OVERLAPPING_CHARACTERS_TYPE,
    TYPOGRAPHIC_EXTRAS,
    MATHEMATICAL_EXTRAS,
    ORNAMENT_SETS_TYPE,
    CHARACTER_ALTERNATIVES,
    DESIGN_COMPLEXITY_TYPE,
    STYLE_OPTIONS,
    CHARACTER_SHAPE,
    NUMBER_CASE,
    TEXT_SPACING,
    TRANSLITERATION,
    ANNOTATION_TYPE,
    KANA_SPACING_TYPE,
    IDEOGRAPHIC_SPACING_TYPE,
    UNICODE_DECOMPOSITION_TYPE,
    RUBY_KANA,
    CJK_SYMBOL_ALTERNATIVES_TYPE,
    IDEOGRAPHIC_ALTERNATIVES_TYPE,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    ITALIC_CJK_ROMAN,
    CASE_SENSITIVE_LAYOUT,
    ALTERNATE_KANA,
    STYLISTIC_ALTERNATIVES,
    CONTEXTUAL_ALTERNATIVES,
    LOWER_CASE,
    UPPER_CASE,
    LANGUAGE_TAG_TYPE,
    CJK_ROMAN_SPACING_TYPE,
}
export enum buffer_cluster_level_t {
    /**
     * Return cluster values grouped by graphemes into
     *   monotone order.
     */
    MONOTONE_GRAPHEMES,
    /**
     * Return cluster values grouped into monotone order.
     */
    MONOTONE_CHARACTERS,
    /**
     * Don't group cluster values.
     */
    CHARACTERS,
    /**
     * Default cluster level,
     *   equal to `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES`.
     */
    DEFAULT,
}
export enum buffer_content_type_t {
    /**
     * Initial value for new buffer.
     */
    INVALID,
    /**
     * The buffer contains input characters (before shaping).
     */
    UNICODE,
    /**
     * The buffer contains output glyphs (after shaping).
     */
    GLYPHS,
}
/**
 * The buffer serialization and de-serialization format used in
 * hb_buffer_serialize_glyphs() and hb_buffer_deserialize_glyphs().
 */
export enum buffer_serialize_format_t {
    /**
     * a human-readable, plain text format.
     */
    TEXT,
    /**
     * a machine-readable JSON format.
     */
    JSON,
    /**
     * invalid format.
     */
    INVALID,
}
export enum direction_t {
    /**
     * Initial, unset direction.
     */
    INVALID,
    /**
     * Text is set horizontally from left to right.
     */
    LTR,
    /**
     * Text is set horizontally from right to left.
     */
    RTL,
    /**
     * Text is set vertically from top to bottom.
     */
    TTB,
    /**
     * Text is set vertically from bottom to top.
     */
    BTT,
}
export enum memory_mode_t {
    DUPLICATE,
    READONLY,
    WRITABLE,
    READONLY_MAY_MAKE_WRITABLE,
}
/**
 * Baseline tags from https://docs.microsoft.com/en-us/typography/opentype/spec/baselinetags
 */
export enum ot_layout_baseline_tag_t {
    /**
     * The baseline used by alphabetic scripts such as Latin, Cyrillic and Greek.
     * In vertical writing mode, the alphabetic baseline for characters rotated 90 degrees clockwise.
     * (This would not apply to alphabetic characters that remain upright in vertical writing mode, since these
     * characters are not rotated.)
     */
    ROMAN,
    /**
     * The hanging baseline. In horizontal direction, this is the horizontal
     * line from which syllables seem, to hang in Tibetan and other similar scripts. In vertical writing mode,
     * for Tibetan (or some other similar script) characters rotated 90 degrees clockwise.
     */
    HANGING,
    /**
     * Ideographic character face bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_BOTTOM_OR_LEFT,
    /**
     * Ideographic character face top or right edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_TOP_OR_RIGHT,
    /**
     * Ideographic em-box bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_BOTTOM_OR_LEFT,
    /**
     * Ideographic em-box top or right edge baseline,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_TOP_OR_RIGHT,
    /**
     * The baseline about which mathematical characters are centered.
     * In vertical writing mode when mathematical characters rotated 90 degrees clockwise, are centered.
     */
    MATH,
}
/**
 * The GDEF classes defined for glyphs.
 */
export enum ot_layout_glyph_class_t {
    /**
     * Glyphs not matching the other classifications
     */
    UNCLASSIFIED,
    /**
     * Spacing, single characters, capable of accepting marks
     */
    BASE_GLYPH,
    /**
     * Glyphs that represent ligation of multiple characters
     */
    LIGATURE,
    /**
     * Non-spacing, combining glyphs that represent marks
     */
    MARK,
    /**
     * Spacing glyphs that represent part of a single character
     */
    COMPONENT,
}
/**
 * The 'MATH' table constants specified at
 * https://docs.microsoft.com/en-us/typography/opentype/spec/math
 */
export enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    DISPLAY_OPERATOR_MIN_HEIGHT,
    MATH_LEADING,
    AXIS_HEIGHT,
    ACCENT_BASE_HEIGHT,
    FLATTENED_ACCENT_BASE_HEIGHT,
    SUBSCRIPT_SHIFT_DOWN,
    SUBSCRIPT_TOP_MAX,
    SUBSCRIPT_BASELINE_DROP_MIN,
    SUPERSCRIPT_SHIFT_UP,
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    SUPERSCRIPT_BOTTOM_MIN,
    SUPERSCRIPT_BASELINE_DROP_MAX,
    SUB_SUPERSCRIPT_GAP_MIN,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    SPACE_AFTER_SCRIPT,
    UPPER_LIMIT_GAP_MIN,
    UPPER_LIMIT_BASELINE_RISE_MIN,
    LOWER_LIMIT_GAP_MIN,
    LOWER_LIMIT_BASELINE_DROP_MIN,
    STACK_TOP_SHIFT_UP,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    STACK_BOTTOM_SHIFT_DOWN,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    STACK_GAP_MIN,
    STACK_DISPLAY_STYLE_GAP_MIN,
    STRETCH_STACK_TOP_SHIFT_UP,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    STRETCH_STACK_GAP_ABOVE_MIN,
    STRETCH_STACK_GAP_BELOW_MIN,
    FRACTION_NUMERATOR_SHIFT_UP,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    FRACTION_NUMERATOR_GAP_MIN,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    FRACTION_RULE_THICKNESS,
    FRACTION_DENOMINATOR_GAP_MIN,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    SKEWED_FRACTION_HORIZONTAL_GAP,
    SKEWED_FRACTION_VERTICAL_GAP,
    OVERBAR_VERTICAL_GAP,
    OVERBAR_RULE_THICKNESS,
    OVERBAR_EXTRA_ASCENDER,
    UNDERBAR_VERTICAL_GAP,
    UNDERBAR_RULE_THICKNESS,
    UNDERBAR_EXTRA_DESCENDER,
    RADICAL_VERTICAL_GAP,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    RADICAL_RULE_THICKNESS,
    RADICAL_EXTRA_ASCENDER,
    RADICAL_KERN_BEFORE_DEGREE,
    RADICAL_KERN_AFTER_DEGREE,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
}
/**
 * The math kerning-table types defined for the four corners
 * of a glyph.
 */
export enum ot_math_kern_t {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
/**
 * Known metadata tags from https://docs.microsoft.com/en-us/typography/opentype/spec/meta
 */
export enum ot_meta_tag_t {
    /**
     * Design languages. Text, using only
     * Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * for the user audiences that the font was primarily designed for.
     */
    DESIGN_LANGUAGES,
    /**
     * Supported languages. Text, using
     * only Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * that the font is declared to be capable of supporting.
     */
    SUPPORTED_LANGUAGES,
}
/**
 * From https://docs.microsoft.com/en-us/typography/opentype/spec/mvar#value-tags
 */
export enum ot_metrics_tag_t {
    /**
     * horizontal ascender.
     */
    HORIZONTAL_ASCENDER,
    /**
     * horizontal descender.
     */
    HORIZONTAL_DESCENDER,
    /**
     * horizontal line gap.
     */
    HORIZONTAL_LINE_GAP,
    /**
     * horizontal clipping ascent.
     */
    HORIZONTAL_CLIPPING_ASCENT,
    /**
     * horizontal clipping descent.
     */
    HORIZONTAL_CLIPPING_DESCENT,
    /**
     * vertical ascender.
     */
    VERTICAL_ASCENDER,
    /**
     * vertical descender.
     */
    VERTICAL_DESCENDER,
    /**
     * vertical line gap.
     */
    VERTICAL_LINE_GAP,
    /**
     * horizontal caret rise.
     */
    HORIZONTAL_CARET_RISE,
    /**
     * horizontal caret run.
     */
    HORIZONTAL_CARET_RUN,
    /**
     * horizontal caret offset.
     */
    HORIZONTAL_CARET_OFFSET,
    /**
     * vertical caret rise.
     */
    VERTICAL_CARET_RISE,
    /**
     * vertical caret run.
     */
    VERTICAL_CARET_RUN,
    /**
     * vertical caret offset.
     */
    VERTICAL_CARET_OFFSET,
    /**
     * x height.
     */
    X_HEIGHT,
    /**
     * cap height.
     */
    CAP_HEIGHT,
    /**
     * subscript em x size.
     */
    SUBSCRIPT_EM_X_SIZE,
    /**
     * subscript em y size.
     */
    SUBSCRIPT_EM_Y_SIZE,
    /**
     * subscript em x offset.
     */
    SUBSCRIPT_EM_X_OFFSET,
    /**
     * subscript em y offset.
     */
    SUBSCRIPT_EM_Y_OFFSET,
    /**
     * superscript em x size.
     */
    SUPERSCRIPT_EM_X_SIZE,
    /**
     * superscript em y size.
     */
    SUPERSCRIPT_EM_Y_SIZE,
    /**
     * superscript em x offset.
     */
    SUPERSCRIPT_EM_X_OFFSET,
    /**
     * superscript em y offset.
     */
    SUPERSCRIPT_EM_Y_OFFSET,
    /**
     * strikeout size.
     */
    STRIKEOUT_SIZE,
    /**
     * strikeout offset.
     */
    STRIKEOUT_OFFSET,
    /**
     * underline size.
     */
    UNDERLINE_SIZE,
    /**
     * underline offset.
     */
    UNDERLINE_OFFSET,
}
export enum script_t {
    COMMON,
    INHERITED,
    UNKNOWN,
    ARABIC,
    ARMENIAN,
    BENGALI,
    CYRILLIC,
    DEVANAGARI,
    GEORGIAN,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HANGUL,
    HAN,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    LAO,
    LATIN,
    MALAYALAM,
    ORIYA,
    TAMIL,
    TELUGU,
    THAI,
    TIBETAN,
    BOPOMOFO,
    BRAILLE,
    CANADIAN_SYLLABICS,
    CHEROKEE,
    ETHIOPIC,
    KHMER,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    RUNIC,
    SINHALA,
    SYRIAC,
    THAANA,
    YI,
    DESERET,
    GOTHIC,
    OLD_ITALIC,
    BUHID,
    HANUNOO,
    TAGALOG,
    TAGBANWA,
    CYPRIOT,
    LIMBU,
    LINEAR_B,
    OSMANYA,
    SHAVIAN,
    TAI_LE,
    UGARITIC,
    BUGINESE,
    COPTIC,
    GLAGOLITIC,
    KHAROSHTHI,
    NEW_TAI_LUE,
    OLD_PERSIAN,
    SYLOTI_NAGRI,
    TIFINAGH,
    BALINESE,
    CUNEIFORM,
    NKO,
    PHAGS_PA,
    PHOENICIAN,
    CARIAN,
    CHAM,
    KAYAH_LI,
    LEPCHA,
    LYCIAN,
    LYDIAN,
    OL_CHIKI,
    REJANG,
    SAURASHTRA,
    SUNDANESE,
    VAI,
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
    ADLAM,
    BHAIKSUKI,
    MARCHEN,
    OSAGE,
    TANGUT,
    NEWA,
    MASARAM_GONDI,
    NUSHU,
    SOYOMBO,
    ZANABAZAR_SQUARE,
    DOGRA,
    GUNJALA_GONDI,
    HANIFI_ROHINGYA,
    MAKASAR,
    MEDEFAIDRIN,
    OLD_SOGDIAN,
    SOGDIAN,
    ELYMAIC,
    NANDINAGARI,
    NYIAKENG_PUACHUE_HMONG,
    WANCHO,
    INVALID,
}
export enum unicode_combining_class_t {
    NOT_REORDERED,
    OVERLAY,
    NUKTA,
    KANA_VOICING,
    VIRAMA,
    CCC10,
    CCC11,
    CCC12,
    CCC13,
    CCC14,
    CCC15,
    CCC16,
    CCC17,
    CCC18,
    CCC19,
    CCC20,
    CCC21,
    CCC22,
    CCC23,
    CCC24,
    CCC25,
    CCC26,
    CCC27,
    CCC28,
    CCC29,
    CCC30,
    CCC31,
    CCC32,
    CCC33,
    CCC34,
    CCC35,
    CCC36,
    CCC84,
    CCC91,
    CCC103,
    CCC107,
    CCC118,
    CCC122,
    CCC129,
    CCC130,
    CCC133,
    ATTACHED_BELOW_LEFT,
    ATTACHED_BELOW,
    ATTACHED_ABOVE,
    ATTACHED_ABOVE_RIGHT,
    BELOW_LEFT,
    BELOW,
    BELOW_RIGHT,
    LEFT,
    RIGHT,
    ABOVE_LEFT,
    ABOVE,
    ABOVE_RIGHT,
    DOUBLE_BELOW,
    DOUBLE_ABOVE,
    IOTA_SUBSCRIPT,
    INVALID,
}
export enum unicode_general_category_t {
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
}
/**
 * @bitfield 
 */
export enum buffer_diff_flags_t {
    EQUAL,
    CONTENT_TYPE_MISMATCH,
    LENGTH_MISMATCH,
    NOTDEF_PRESENT,
    DOTTED_CIRCLE_PRESENT,
    CODEPOINT_MISMATCH,
    CLUSTER_MISMATCH,
    GLYPH_FLAGS_MISMATCH,
    POSITION_MISMATCH,
}
/**
 * @bitfield 
 */
export enum buffer_flags_t {
    /**
     * the default buffer flag.
     */
    DEFAULT,
    /**
     * flag indicating that special handling of the beginning
     *                      of text paragraph can be applied to this buffer. Should usually
     *                      be set, unless you are passing to the buffer only part
     *                      of the text without the full context.
     */
    BOT,
    /**
     * flag indicating that special handling of the end of text
     *                      paragraph can be applied to this buffer, similar to
     *                      `HB_BUFFER_FLAG_BOT`.
     */
    EOT,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should use the corresponding glyph
     *                      from the font, instead of hiding them (done by
     *                      replacing them with the space glyph and zeroing the
     *                      advance width.)  This flag takes precedence over
     *                      `HB_BUFFER_FLAG_REMOVE_DEFAULT_IGNORABLES`.
     */
    PRESERVE_DEFAULT_IGNORABLES,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should be removed from glyph string
     *                      instead of hiding them (done by replacing them with the
     *                      space glyph and zeroing the advance width.)
     *                      `HB_BUFFER_FLAG_PRESERVE_DEFAULT_IGNORABLES` takes
     *                      precedence over this flag. Since: 1.8.0
     */
    REMOVE_DEFAULT_IGNORABLES,
    /**
     * flag indicating that a dotted circle should
     *                      not be inserted in the rendering of incorrect
     *                      character sequences (such at <0905 093E>). Since: 2.4
     */
    DO_NOT_INSERT_DOTTED_CIRCLE,
}
/**
 * Flags that control what glyph information are serialized in hb_buffer_serialize_glyphs().
 * @bitfield 
 */
export enum buffer_serialize_flags_t {
    /**
     * serialize glyph names, clusters and positions.
     */
    DEFAULT,
    /**
     * do not serialize glyph cluster.
     */
    NO_CLUSTERS,
    /**
     * do not serialize glyph position information.
     */
    NO_POSITIONS,
    /**
     * do no serialize glyph name.
     */
    NO_GLYPH_NAMES,
    /**
     * serialize glyph extents.
     */
    GLYPH_EXTENTS,
    /**
     * serialize glyph flags. Since: 1.5.0
     */
    GLYPH_FLAGS,
    /**
     * do not serialize glyph advances,
     *  glyph offsets will reflect absolute glyph positions. Since: 1.8.0
     */
    NO_ADVANCES,
}
/**
 * @bitfield 
 */
export enum glyph_flags_t {
    /**
     * Indicates that if input text is broken at the
     * 				   beginning of the cluster this glyph is part of,
     * 				   then both sides need to be re-shaped, as the
     * 				   result might be different.  On the flip side,
     * 				   it means that when this flag is not present,
     * 				   then it's safe to break the glyph-run at the
     * 				   beginning of this cluster, and the two sides
     * 				   represent the exact same result one would get
     * 				   if breaking input text at the beginning of
     * 				   this cluster and shaping the two sides
     * 				   separately.  This can be used to optimize
     * 				   paragraph layout, by avoiding re-shaping
     * 				   of each line after line-breaking, or limiting
     * 				   the reshaping to a small piece around the
     * 				   breaking point only.
     */
    UNSAFE_TO_BREAK,
    /**
     * All the currently defined flags.
     */
    DEFINED,
}
/**
 * @bitfield 
 */
export enum ot_color_palette_flags_t {
    /**
     * Default indicating that there is nothing special
     *   to note about a color palette.
     */
    DEFAULT,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a light background such as white.
     */
    USABLE_WITH_LIGHT_BACKGROUND,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a dark background such as black.
     */
    USABLE_WITH_DARK_BACKGROUND,
}
/**
 * Flags for math glyph parts.
 * @bitfield 
 */
export enum ot_math_glyph_part_flags_t {
    EXTENDER,
}
/**
 * @bitfield 
 */
export enum ot_var_axis_flags_t {
    /**
     * The axis should not be exposed directly in user interfaces.
     */
    HIDDEN,
}
export const AAT_LAYOUT_NO_SELECTOR_INDEX: number
/**
 * The default code point for replacing invalid characters in a given encoding.
 * Set to U+FFFD REPLACEMENT CHARACTER.
 */
export const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
export const FEATURE_GLOBAL_START: number
export const LANGUAGE_INVALID: language_t
export const MAP_VALUE_INVALID: codepoint_t
export const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
export const OT_LAYOUT_NO_FEATURE_INDEX: number
export const OT_LAYOUT_NO_SCRIPT_INDEX: number
export const OT_LAYOUT_NO_VARIATIONS_INDEX: number
export const OT_MAX_TAGS_PER_LANGUAGE: number
export const OT_MAX_TAGS_PER_SCRIPT: number
export const OT_VAR_NO_AXIS_INDEX: number
export const SET_VALUE_INVALID: codepoint_t
export const UNICODE_MAX: number
/**
 * See Unicode 6.1 for details on the maximum decomposition length.
 */
export const UNICODE_MAX_DECOMPOSITION_LEN: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_STRING: string
export function blob_copy_writable_or_fail(blob: blob_t): blob_t
export function blob_create_from_file(file_name: string): blob_t
export function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t
export function blob_get_data(blob: blob_t): string[]
export function blob_get_data_writable(blob: blob_t): string[]
export function blob_get_empty(): blob_t
export function blob_get_length(blob: blob_t): number
export function blob_is_immutable(blob: blob_t): bool_t
export function blob_make_immutable(blob: blob_t): void
export function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
export function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void
export function buffer_add_latin1(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
export function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf8(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
export function buffer_allocation_successful(buffer: buffer_t): bool_t
export function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void
export function buffer_clear_contents(buffer: buffer_t): void
export function buffer_create(): buffer_t
export function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string ]
export function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t
export function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t
export function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t
export function buffer_get_direction(buffer: buffer_t): direction_t
export function buffer_get_empty(): buffer_t
export function buffer_get_flags(buffer: buffer_t): buffer_flags_t
export function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[]
export function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[]
export function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t
export function buffer_get_language(buffer: buffer_t): language_t
export function buffer_get_length(buffer: buffer_t): number
export function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t
export function buffer_get_script(buffer: buffer_t): script_t
export function buffer_get_segment_properties(buffer: buffer_t): /* props */ segment_properties_t
export function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t
export function buffer_guess_segment_properties(buffer: buffer_t): void
export function buffer_normalize_glyphs(buffer: buffer_t): void
export function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t
export function buffer_reset(buffer: buffer_t): void
export function buffer_reverse(buffer: buffer_t): void
export function buffer_reverse_clusters(buffer: buffer_t): void
export function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void
export function buffer_serialize_format_from_string(str: Uint8Array): buffer_serialize_format_t
export function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string
export function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number ]
export function buffer_serialize_list_formats(): string[]
export function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void
export function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void
export function buffer_set_direction(buffer: buffer_t, direction: direction_t): void
export function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void
export function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void
export function buffer_set_language(buffer: buffer_t, language: language_t): void
export function buffer_set_length(buffer: buffer_t, length: number): bool_t
export function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t): void
export function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void
export function buffer_set_script(buffer: buffer_t, script: script_t): void
export function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void
export function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void
export function color_get_alpha(color: color_t): number
export function color_get_blue(color: color_t): number
export function color_get_green(color: color_t): number
export function color_get_red(color: color_t): number
export function direction_from_string(str: Uint8Array): direction_t
export function direction_to_string(direction: direction_t): string
export function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t
export function face_builder_create(): face_t
export function face_collect_unicodes(face: face_t, out: set_t): void
export function face_collect_variation_selectors(face: face_t, out: set_t): void
export function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void
export function face_count(blob: blob_t): number
export function face_create(blob: blob_t, index: number): face_t
export function face_create_for_tables(reference_table_func: reference_table_func_t): face_t
export function face_get_empty(): face_t
export function face_get_glyph_count(face: face_t): number
export function face_get_index(face: face_t): number
export function face_get_table_tags(face: face_t, start_offset: number, table_count: number, table_tags: tag_t): number
export function face_get_upem(face: face_t): number
export function face_is_immutable(face: face_t): bool_t
export function face_make_immutable(face: face_t): void
export function face_reference_blob(face: face_t): blob_t
export function face_reference_table(face: face_t, tag: tag_t): blob_t
export function face_set_glyph_count(face: face_t, glyph_count: number): void
export function face_set_index(face: face_t, index: number): void
export function face_set_upem(face: face_t, upem: number): void
export function feature_from_string(str: Uint8Array): [ /* returnType */ bool_t, /* feature */ feature_t ]
export function feature_to_string(feature: feature_t): /* buf */ string[]
export function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_create(face: face_t): font_t
export function font_create_sub_font(parent: font_t): font_t
export function font_funcs_create(): font_funcs_t
export function font_funcs_get_empty(): font_funcs_t
export function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t
export function font_funcs_make_immutable(ffuncs: font_funcs_t): void
export function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
export function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
export function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
export function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
export function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
export function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
export function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
export function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
export function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
export function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
export function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
export function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
export function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
export function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
export function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
export function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
export function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
export function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
export function font_get_empty(): font_t
export function font_get_extents_for_direction(font: font_t, direction: direction_t): /* extents */ font_extents_t
export function font_get_face(font: font_t): face_t
export function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
export function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_from_name(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
export function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t
export function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_name(font: font_t, glyph: codepoint_t, name: string[]): bool_t
export function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
export function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t
export function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_h_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
export function font_get_parent(font: font_t): font_t
export function font_get_ppem(font: font_t): [ /* x_ppem */ number, /* y_ppem */ number ]
export function font_get_ptem(font: font_t): number
export function font_get_scale(font: font_t): [ /* x_scale */ number, /* y_scale */ number ]
export function font_get_v_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_var_coords_normalized(font: font_t, length: number): number
export function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_from_string(font: font_t, s: Uint8Array): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_to_string(font: font_t, glyph: codepoint_t, s: string[]): void
export function font_is_immutable(font: font_t): bool_t
export function font_make_immutable(font: font_t): void
export function font_set_face(font: font_t, face: face_t): void
export function font_set_funcs(font: font_t, klass: font_funcs_t): void
export function font_set_funcs_data(font: font_t, font_data: object | null): void
export function font_set_parent(font: font_t, parent: font_t): void
export function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void
export function font_set_ptem(font: font_t, ptem: number): void
export function font_set_scale(font: font_t, x_scale: number, y_scale: number): void
export function font_set_var_coords_design(font: font_t, coords: number, coords_length: number): void
export function font_set_var_coords_normalized(font: font_t, coords: number, coords_length: number): void
export function font_set_var_named_instance(font: font_t, instance_index: number): void
export function font_set_variations(font: font_t, variations: variation_t, variations_length: number): void
export function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function ft_font_changed(font: font_t): void
export function ft_font_get_load_flags(font: font_t): number
export function ft_font_set_funcs(font: font_t): void
export function ft_font_set_load_flags(font: font_t, load_flags: number): void
export function glib_blob_create(gbytes: GLib.Bytes): blob_t
export function glib_get_unicode_funcs(): unicode_funcs_t
export function glib_script_from_script(script: script_t): GLib.UnicodeScript
export function glib_script_to_script(script: GLib.UnicodeScript): script_t
export function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t
export function language_from_string(str: Uint8Array): language_t
export function language_get_default(): language_t
export function language_to_string(language: language_t): string
export function map_allocation_successful(map: map_t): bool_t
export function map_clear(map: map_t): void
export function map_create(): map_t
export function map_del(map: map_t, key: codepoint_t): void
export function map_get(map: map_t, key: codepoint_t): codepoint_t
export function map_get_empty(): map_t
export function map_get_population(map: map_t): number
export function map_has(map: map_t, key: codepoint_t): bool_t
export function map_is_empty(map: map_t): bool_t
export function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void
export function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
export function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t
export function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t
export function ot_color_has_layers(face: face_t): bool_t
export function ot_color_has_palettes(face: face_t): bool_t
export function ot_color_has_png(face: face_t): bool_t
export function ot_color_has_svg(face: face_t): bool_t
export function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t
export function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
export function ot_color_palette_get_count(face: face_t): number
export function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t
export function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t
export function ot_font_set_funcs(font: font_t): void
export function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* feature_indexes */ set_t
export function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookup_indexes */ set_t
export function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
export function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [ /* returnType */ bool_t, /* label_id */ ot_name_id_t, /* tooltip_id */ ot_name_id_t, /* sample_id */ ot_name_id_t, /* num_named_parameters */ number, /* first_param_id */ ot_name_id_t ]
export function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* point_array */ number[] ]
export function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
export function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
export function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
export function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* caret_array */ position_t[] ]
export function ot_layout_get_size_params(face: face_t): [ /* returnType */ bool_t, /* design_size */ number, /* subfamily_id */ number, /* subfamily_name_id */ ot_name_id_t, /* range_start */ number, /* range_end */ number ]
export function ot_layout_has_glyph_classes(face: face_t): bool_t
export function ot_layout_has_positioning(face: face_t): bool_t
export function ot_layout_has_substitution(face: face_t): bool_t
export function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_indexes */ number[] ]
export function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_index: number): [ /* returnType */ bool_t, /* feature_tag */ tag_t ]
export function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [ /* glyphs_before */ set_t, /* glyphs_input */ set_t, /* glyphs_after */ set_t, /* glyphs_output */ set_t ]
export function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): /* glyphs */ set_t
export function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t
export function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): /* glyphs */ set_t
export function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t
export function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [ /* returnType */ number, /* language_tags */ tag_t[] ]
export function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number ]
export function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
export function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [ /* returnType */ bool_t, /* variations_index */ number ]
export function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [ /* returnType */ bool_t, /* script_index */ number ]
export function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number
export function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* script_tags */ tag_t[] ]
export function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
export function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t
export function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italics_correction */ position_t ]
export function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t
export function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
export function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t
export function ot_math_has_data(face: face_t): bool_t
export function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t
export function ot_meta_get_entry_tags(face: face_t, start_offset: number, entries_count: number, entries: ot_meta_tag_t): number
export function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t
export function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t ]
export function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number
export function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
export function ot_name_list_names(face: face_t): ot_name_entry_t[]
export function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t, num_features: number, glyphs: set_t): void
export function ot_tag_from_language(language: language_t): tag_t
export function ot_tag_to_language(tag: tag_t): language_t
export function ot_tag_to_script(tag: tag_t): script_t
export function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void
export function ot_tags_from_script_and_language(script: script_t, language: language_t, script_count: number | null, language_count: number | null): [ /* script_tags */ tag_t, /* language_tags */ tag_t ]
export function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t, script: script_t | null, language: language_t | null): void
export function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number, axis_info: ot_var_axis_t): bool_t
export function ot_var_find_axis_info(face: face_t, axis_tag: tag_t, axis_info: ot_var_axis_info_t): bool_t
export function ot_var_get_axes(face: face_t, start_offset: number, axes_count: number, axes_array: ot_var_axis_t): number
export function ot_var_get_axis_count(face: face_t): number
export function ot_var_get_axis_infos(face: face_t, start_offset: number, axes_count: number, axes_array: ot_var_axis_info_t): number
export function ot_var_get_named_instance_count(face: face_t): number
export function ot_var_has_data(face: face_t): bool_t
export function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number, coords_length: number, coords: number): number
export function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number, normalized_coords: number): void
export function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number, coords: number, coords_length: number): void
export function script_from_iso15924_tag(tag: tag_t): script_t
export function script_from_string(str: Uint8Array): script_t
export function script_get_horizontal_direction(script: script_t): direction_t
export function script_to_iso15924_tag(script: script_t): tag_t
export function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t
export function segment_properties_hash(p: segment_properties_t): number
export function set_add(set: set_t, codepoint: codepoint_t): void
export function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_allocation_successful(set: set_t): bool_t
export function set_clear(set: set_t): void
export function set_create(): set_t
export function set_del(set: set_t, codepoint: codepoint_t): void
export function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_get_empty(): set_t
export function set_get_max(set: set_t): codepoint_t
export function set_get_min(set: set_t): codepoint_t
export function set_get_population(set: set_t): number
export function set_has(set: set_t, codepoint: codepoint_t): bool_t
export function set_intersect(set: set_t, other: set_t): void
export function set_invert(set: set_t): void
export function set_is_empty(set: set_t): bool_t
export function set_is_equal(set: set_t, other: set_t): bool_t
export function set_is_subset(set: set_t, larger_set: set_t): bool_t
export function set_next(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function set_next_range(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function set_previous(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
export function set_previous_range(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
export function set_set(set: set_t, other: set_t): void
export function set_subtract(set: set_t, other: set_t): void
export function set_symmetric_difference(set: set_t, other: set_t): void
export function set_union(set: set_t, other: set_t): void
export function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
export function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list: string[] | null): bool_t
export function shape_list_shapers(): string[]
export function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t, num_user_features: number, coords: number, num_coords: number, shaper_list: string): shape_plan_t
export function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t, num_user_features: number, coords: number, num_coords: number, shaper_list: string): shape_plan_t
export function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
export function shape_plan_get_empty(): shape_plan_t
export function shape_plan_get_shaper(shape_plan: shape_plan_t): string
export function tag_from_string(str: Uint8Array): tag_t
export function tag_to_string(tag: tag_t): /* buf */ Uint8Array
export function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
export function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
export function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
export function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
export function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
export function unicode_funcs_create(parent: unicode_funcs_t | null): unicode_funcs_t
export function unicode_funcs_get_default(): unicode_funcs_t
export function unicode_funcs_get_empty(): unicode_funcs_t
export function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t
export function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t
export function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void
export function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
export function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
export function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
export function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
export function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
export function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
export function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
export function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
export function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
export function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
export function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
export function variation_from_string(str: string, len: number, variation: variation_t): bool_t
export function variation_to_string(variation: variation_t, buf: string, size: number): void
export function version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function version_atleast(major: number, minor: number, micro: number): bool_t
export function version_string(): string
/**
 * @callback 
 */
export interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
/**
 * @callback 
 */
export interface destroy_func_t {
    (): void
}
/**
 * @callback 
 */
export interface font_get_font_extents_func_t {
    (font: font_t, font_data: object | null, extents: font_extents_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_advance_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): position_t
}
/**
 * @callback 
 */
export interface font_get_glyph_advances_func_t {
    (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
}
/**
 * @callback 
 */
export interface font_get_glyph_contour_point_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, point_index: number, x: position_t, y: position_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_extents_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, extents: glyph_extents_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_from_name_func_t {
    (font: font_t, font_data: object | null, name: string, len: number, glyph: codepoint_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_kerning_func_t {
    (font: font_t, font_data: object | null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t
}
/**
 * @callback 
 */
export interface font_get_glyph_name_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, name: string, size: number): bool_t
}
/**
 * @callback 
 */
export interface font_get_glyph_origin_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, x: position_t, y: position_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_nominal_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, glyph: codepoint_t): bool_t
}
/**
 * @callback 
 */
export interface font_get_nominal_glyphs_func_t {
    (font: font_t, font_data: object | null, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
}
/**
 * @callback 
 */
export interface font_get_variation_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
/**
 * @callback 
 */
export interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
/**
 * @callback 
 */
export interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
}
/**
 * @callback 
 */
export interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t, ab: codepoint_t): bool_t
}
/**
 * Fully decompose `u` to its Unicode compatibility decomposition. The codepoints of the decomposition will be written to `decomposed`.
 * The complete length of the decomposition will be returned.
 * 
 * If `u` has no compatibility decomposition, zero should be returned.
 * 
 * The Unicode standard guarantees that a buffer of length %HB_UNICODE_MAX_DECOMPOSITION_LEN codepoints will always be sufficient for any
 * compatibility decomposition plus an terminating value of 0.  Consequently, `decompose` must be allocated by the caller to be at least this length.  Implementations
 * of this function type must ensure that they do not write past the provided array.
 * @callback 
 */
export interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
}
/**
 * @callback 
 */
export interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t, a: codepoint_t, b: codepoint_t): bool_t
}
/**
 * @callback 
 */
export interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
}
/**
 * @callback 
 */
export interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
}
/**
 * @callback 
 */
export interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
/**
 * @callback 
 */
export interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
export class blob_t {
    static name: string
}
/**
 * The main structure holding the input text and its properties before shaping,
 * and output glyphs and their information after shaping.
 */
export class buffer_t {
    static name: string
}
export class face_t {
    static name: string
}
/**
 * The #hb_feature_t is the structure that holds information about requested
 * feature application. The feature will be applied with the given value to all
 * glyphs which are in clusters between `start` (inclusive) and `end` (exclusive).
 * Setting start to `HB_FEATURE_GLOBAL_START` and end to `HB_FEATURE_GLOBAL_END`
 * specifies that the feature always applies to the entire buffer.
 */
export class feature_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.feature_t */
    /**
     * a feature tag
     */
    tag: tag_t
    /**
     * 0 disables the feature, non-zero (usually 1) enables the feature.
     * For features implemented as lookup type 3 (like 'salt') the `value` is a one
     * based index into the alternates.
     */
    value: number
    /**
     * the cluster to start applying this feature setting (inclusive).
     */
    start: number
    /**
     * the cluster to end applying this feature setting (exclusive).
     */
    end: number
    /* Owm methods of HarfBuzz-0.0.HarfBuzz.feature_t */
    /**
     * Converts a #hb_feature_t into a %NULL-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    _string(): /* buf */ string[]
    static name: string
}
export class font_extents_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.font_extents_t */
    ascender: position_t
    descender: position_t
    line_gap: position_t
    static name: string
}
export class font_funcs_t {
    static name: string
}
export class font_t {
    static name: string
}
export class glyph_extents_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t */
    x_bearing: position_t
    y_bearing: position_t
    width: position_t
    height: position_t
    static name: string
}
/**
 * The #hb_glyph_info_t is the structure that holds information about the
 * glyphs and their relation to input text.
 */
export class glyph_info_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t */
    /**
     * either a Unicode code point (before shaping) or a glyph index
     *             (after shaping).
     */
    codepoint: codepoint_t
    /**
     * the index of the character in the original text that corresponds
     *           to this #hb_glyph_info_t, or whatever the client passes to
     *           hb_buffer_add(). More than one #hb_glyph_info_t can have the same
     *           `cluster` value, if they resulted from the same character (e.g. one
     *           to many glyph substitution), and when more than one character gets
     *           merged in the same glyph (e.g. many to one glyph substitution) the
     *           #hb_glyph_info_t will have the smallest cluster value of them.
     *           By default some characters are merged into the same cluster
     *           (e.g. combining marks have the same cluster as their bases)
     *           even if they are separate glyphs, hb_buffer_set_cluster_level()
     *           allow selecting more fine-grained cluster handling.
     */
    cluster: number
    static name: string
}
/**
 * The #hb_glyph_position_t is the structure that holds the positions of the
 * glyph in both horizontal and vertical directions. All positions in
 * #hb_glyph_position_t are relative to the current point.
 */
export class glyph_position_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t */
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in horizontal direction.
     */
    x_advance: position_t
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in vertical direction.
     */
    y_advance: position_t
    /**
     * how much the glyph moves on the X-axis before drawing it, this
     *            should not affect how much the line advances.
     */
    x_offset: position_t
    /**
     * how much the glyph moves on the Y-axis before drawing it, this
     *            should not affect how much the line advances.
     */
    y_offset: position_t
    static name: string
}
export class language_t {
    /* Owm methods of HarfBuzz-0.0.HarfBuzz.language_t */
    /**
     * See hb_language_from_string().
     */
    _string(): string
    static name: string
}
export class map_t {
    static name: string
}
/**
 * Pairs of glyph and color index.
 */
export class ot_color_layer_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t */
    glyph: codepoint_t
    color_index: number
    static name: string
}
/**
 * Data type to hold information for a "part" component of a math-variant glyph.
 * Large variants for stretchable math glyphs (such as parentheses) can be constructed
 * on the fly from parts.
 */
export class ot_math_glyph_part_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t */
    /**
     * The glyph index of the variant part
     */
    glyph: codepoint_t
    /**
     * The length of the connector on the starting side of the variant part
     */
    start_connector_length: position_t
    /**
     * The length of the connector on the ending side of the variant part
     */
    end_connector_length: position_t
    /**
     * The total advance of the part
     */
    full_advance: position_t
    /**
     * #hb_ot_math_glyph_part_flags_t flags for the part
     */
    flags: ot_math_glyph_part_flags_t
    static name: string
}
/**
 * Data type to hold math-variant information for a glyph.
 */
export class ot_math_glyph_variant_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t */
    /**
     * The glyph index of the variant
     */
    glyph: codepoint_t
    /**
     * The advance width of the variant
     */
    advance: position_t
    static name: string
}
/**
 * Structure representing a name ID in a particular language.
 */
export class ot_name_entry_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t */
    /**
     * name ID
     */
    name_id: ot_name_id_t
    /**
     * language
     */
    language: language_t
    static name: string
}
export class ot_var_axis_info_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t */
    axis_index: number
    tag: tag_t
    name_id: ot_name_id_t
    flags: ot_var_axis_flags_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
export class ot_var_axis_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t */
    tag: tag_t
    name_id: ot_name_id_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
/**
 * The structure that holds various text properties of an #hb_buffer_t. Can be
 * set and retrieved using hb_buffer_set_segment_properties() and
 * hb_buffer_get_segment_properties(), respectively.
 */
export class segment_properties_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t */
    /**
     * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
     */
    direction: direction_t
    /**
     * the #hb_script_t of the buffer, see hb_buffer_set_script().
     */
    script: script_t
    /**
     * the #hb_language_t of the buffer, see hb_buffer_set_language().
     */
    language: language_t
    static name: string
}
export class set_t {
    static name: string
}
export class shape_plan_t {
    static name: string
}
export class unicode_funcs_t {
    static name: string
}
export class user_data_key_t {
    static name: string
}
export class variation_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.variation_t */
    tag: tag_t
    value: number
    /* Owm methods of HarfBuzz-0.0.HarfBuzz.variation_t */
    _string(buf: string, size: number): void
    static name: string
}
export class var_int_t {
    /* Own fields of HarfBuzz-0.0.HarfBuzz.var_int_t */
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Uint8Array
    i8: Uint8Array
    static name: string
}
    export type bool_t = number
    export type codepoint_t = number
    export type color_t = number
    export type font_get_font_h_extents_func_t = font_get_font_extents_func_t
    export type font_get_font_v_extents_func_t = font_get_font_extents_func_t
    export type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
    export type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
    export type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
    export type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
    export type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
    export type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
    export type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
    export type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
    export type mask_t = number
    export type ot_name_id_t = number
    export type position_t = number
    export type tag_t = number