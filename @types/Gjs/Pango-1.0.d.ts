/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Pango-1.0
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

/**
 * A #PangoAlignment describes how to align the lines of a #PangoLayout within the
 * available space. If the #PangoLayout is set to justify
 * using pango_layout_set_justify(), this only has effect for partial lines.
 */
export enum Alignment {
    /**
     * Put all available space on the right
     */
    LEFT,
    /**
     * Center the line within the available space
     */
    CENTER,
    /**
     * Put all available space on the left
     */
    RIGHT,
}
/**
 * The #PangoAttrType
 * distinguishes between different types of attributes. Along with the
 * predefined values, it is possible to allocate additional values
 * for custom attributes using pango_attr_type_register(). The predefined
 * values are given below. The type of structure used to store the
 * attribute is listed in parentheses after the description.
 */
export enum AttrType {
    /**
     * does not happen
     */
    INVALID,
    /**
     * language (#PangoAttrLanguage)
     */
    LANGUAGE,
    /**
     * font family name list (#PangoAttrString)
     */
    FAMILY,
    /**
     * font slant style (#PangoAttrInt)
     */
    STYLE,
    /**
     * font weight (#PangoAttrInt)
     */
    WEIGHT,
    /**
     * font variant (normal or small caps) (#PangoAttrInt)
     */
    VARIANT,
    /**
     * font stretch (#PangoAttrInt)
     */
    STRETCH,
    /**
     * font size in points scaled by %PANGO_SCALE (#PangoAttrInt)
     */
    SIZE,
    /**
     * font description (#PangoAttrFontDesc)
     */
    FONT_DESC,
    /**
     * foreground color (#PangoAttrColor)
     */
    FOREGROUND,
    /**
     * background color (#PangoAttrColor)
     */
    BACKGROUND,
    /**
     * whether the text has an underline (#PangoAttrInt)
     */
    UNDERLINE,
    /**
     * whether the text is struck-through (#PangoAttrInt)
     */
    STRIKETHROUGH,
    /**
     * baseline displacement (#PangoAttrInt)
     */
    RISE,
    /**
     * shape (#PangoAttrShape)
     */
    SHAPE,
    /**
     * font size scale factor (#PangoAttrFloat)
     */
    SCALE,
    /**
     * whether fallback is enabled (#PangoAttrInt)
     */
    FALLBACK,
    /**
     * letter spacing (#PangoAttrInt)
     */
    LETTER_SPACING,
    /**
     * underline color (#PangoAttrColor)
     */
    UNDERLINE_COLOR,
    /**
     * strikethrough color (#PangoAttrColor)
     */
    STRIKETHROUGH_COLOR,
    /**
     * font size in pixels scaled by %PANGO_SCALE (#PangoAttrInt)
     */
    ABSOLUTE_SIZE,
    /**
     * base text gravity (#PangoAttrInt)
     */
    GRAVITY,
    /**
     * gravity hint (#PangoAttrInt)
     */
    GRAVITY_HINT,
    /**
     * OpenType font features (#PangoAttrString). Since 1.38
     */
    FONT_FEATURES,
    /**
     * foreground alpha (#PangoAttrInt). Since 1.38
     */
    FOREGROUND_ALPHA,
    /**
     * background alpha (#PangoAttrInt). Since 1.38
     */
    BACKGROUND_ALPHA,
    /**
     * whether breaks are allowed (#PangoAttrInt). Since 1.44
     */
    ALLOW_BREAKS,
    /**
     * how to render invisible characters (#PangoAttrInt). Since 1.44
     */
    SHOW,
    /**
     * whether to insert hyphens at intra-word line breaks (#PangoAttrInt). Since 1.44
     */
    INSERT_HYPHENS,
}
/**
 * The #PangoBidiType type represents the bidirectional character
 * type of a Unicode character as specified by the
 * <ulink url="http://www.unicode.org/reports/tr9/">Unicode bidirectional algorithm</ulink>.
 */
export enum BidiType {
    /**
     * Left-to-Right
     */
    L,
    /**
     * Left-to-Right Embedding
     */
    LRE,
    /**
     * Left-to-Right Override
     */
    LRO,
    /**
     * Right-to-Left
     */
    R,
    /**
     * Right-to-Left Arabic
     */
    AL,
    /**
     * Right-to-Left Embedding
     */
    RLE,
    /**
     * Right-to-Left Override
     */
    RLO,
    /**
     * Pop Directional Format
     */
    PDF,
    /**
     * European Number
     */
    EN,
    /**
     * European Number Separator
     */
    ES,
    /**
     * European Number Terminator
     */
    ET,
    /**
     * Arabic Number
     */
    AN,
    /**
     * Common Number Separator
     */
    CS,
    /**
     * Nonspacing Mark
     */
    NSM,
    /**
     * Boundary Neutral
     */
    BN,
    /**
     * Paragraph Separator
     */
    B,
    /**
     * Segment Separator
     */
    S,
    /**
     * Whitespace
     */
    WS,
    /**
     * Other Neutrals
     */
    ON,
}
/**
 * Used to indicate how well a font can represent a particular Unicode
 * character point for a particular script.
 * 
 * Since 1.44, only %PANGO_COVERAGE_NONE and %PANGO_COVERAGE_EXACT
 * will be returned.
 */
export enum CoverageLevel {
    /**
     * The character is not representable with the font.
     */
    NONE,
    /**
     * The character is represented in a way that may be
     * comprehensible but is not the correct graphical form.
     * For instance, a Hangul character represented as a
     * a sequence of Jamos, or a Latin transliteration of a Cyrillic word.
     */
    FALLBACK,
    /**
     * The character is represented as basically the correct
     * graphical form, but with a stylistic variant inappropriate for
     * the current script.
     */
    APPROXIMATE,
    /**
     * The character is represented as the correct graphical form.
     */
    EXACT,
}
/**
 * The #PangoDirection type represents a direction in the
 * Unicode bidirectional algorithm; not every value in this
 * enumeration makes sense for every usage of #PangoDirection;
 * for example, the return value of pango_unichar_direction()
 * and pango_find_base_dir() cannot be %PANGO_DIRECTION_WEAK_LTR
 * or %PANGO_DIRECTION_WEAK_RTL, since every character is either
 * neutral or has a strong direction; on the other hand
 * %PANGO_DIRECTION_NEUTRAL doesn't make sense to pass
 * to pango_itemize_with_base_dir().
 * 
 * The %PANGO_DIRECTION_TTB_LTR, %PANGO_DIRECTION_TTB_RTL
 * values come from an earlier interpretation of this
 * enumeration as the writing direction of a block of
 * text and are no longer used; See #PangoGravity for how
 * vertical text is handled in Pango.
 * 
 * If you are interested in text direction, you should
 * really use fribidi directly. PangoDirection is only
 * retained because it is used in some public apis.
 */
export enum Direction {
    /**
     * A strong left-to-right direction
     */
    LTR,
    /**
     * A strong right-to-left direction
     */
    RTL,
    /**
     * Deprecated value; treated the
     *   same as %PANGO_DIRECTION_RTL.
     */
    TTB_LTR,
    /**
     * Deprecated value; treated the
     *   same as %PANGO_DIRECTION_LTR
     */
    TTB_RTL,
    /**
     * A weak left-to-right direction
     */
    WEAK_LTR,
    /**
     * A weak right-to-left direction
     */
    WEAK_RTL,
    /**
     * No direction specified
     */
    NEUTRAL,
}
/**
 * The #PangoEllipsizeMode type describes what sort of (if any)
 * ellipsization should be applied to a line of text. In
 * the ellipsization process characters are removed from the
 * text in order to make it fit to a given width and replaced
 * with an ellipsis.
 */
export enum EllipsizeMode {
    /**
     * No ellipsization
     */
    NONE,
    /**
     * Omit characters at the start of the text
     */
    START,
    /**
     * Omit characters in the middle of the text
     */
    MIDDLE,
    /**
     * Omit characters at the end of the text
     */
    END,
}
/**
 * The #PangoGravity type represents the orientation of glyphs in a segment
 * of text.  This is useful when rendering vertical text layouts.  In
 * those situations, the layout is rotated using a non-identity PangoMatrix,
 * and then glyph orientation is controlled using #PangoGravity.
 * Not every value in this enumeration makes sense for every usage of
 * #PangoGravity; for example, %PANGO_GRAVITY_AUTO only can be passed to
 * pango_context_set_base_gravity() and can only be returned by
 * pango_context_get_base_gravity().
 * 
 * See also: #PangoGravityHint
 */
export enum Gravity {
    /**
     * Glyphs stand upright (default)
     */
    SOUTH,
    /**
     * Glyphs are rotated 90 degrees clockwise
     */
    EAST,
    /**
     * Glyphs are upside-down
     */
    NORTH,
    /**
     * Glyphs are rotated 90 degrees counter-clockwise
     */
    WEST,
    /**
     * Gravity is resolved from the context matrix
     */
    AUTO,
}
/**
 * The #PangoGravityHint defines how horizontal scripts should behave in a
 * vertical context.  That is, English excerpt in a vertical paragraph for
 * example.
 * 
 * See #PangoGravity.
 */
export enum GravityHint {
    /**
     * scripts will take their natural gravity based
     * on the base gravity and the script.  This is the default.
     */
    NATURAL,
    /**
     * always use the base gravity set, regardless of
     * the script.
     */
    STRONG,
    /**
     * for scripts not in their natural direction (eg.
     * Latin in East gravity), choose per-script gravity such that every script
     * respects the line progression.  This means, Latin and Arabic will take
     * opposite gravities and both flow top-to-bottom for example.
     */
    LINE,
}
/**
 * #PangoRenderPart defines different items to render for such
 * purposes as setting colors.
 */
export enum RenderPart {
    /**
     * the text itself
     */
    FOREGROUND,
    /**
     * the area behind the text
     */
    BACKGROUND,
    /**
     * underlines
     */
    UNDERLINE,
    /**
     * strikethrough lines
     */
    STRIKETHROUGH,
}
/**
 * The #PangoScript enumeration identifies different writing
 * systems. The values correspond to the names as defined in the
 * Unicode standard. See <ulink
 * url="http://www.unicode.org/reports/tr24/">Unicode Standard Annex
 * #24: Script names</ulink>.
 * 
 * Note that this enumeration is deprecated and will not be updated
 * to include values in newer versions of the Unicode standard.
 * Applications should use the GUnicodeScript enumeration instead,
 * whose values are interchangeable with PangoScript.
 */
export enum Script {
    /**
     * a value never returned from pango_script_for_unichar()
     */
    INVALID_CODE,
    /**
     * a character used by multiple different scripts
     */
    COMMON,
    /**
     * a mark glyph that takes its script from the
     * base glyph to which it is attached
     */
    INHERITED,
    /**
     * Arabic
     */
    ARABIC,
    /**
     * Armenian
     */
    ARMENIAN,
    /**
     * Bengali
     */
    BENGALI,
    /**
     * Bopomofo
     */
    BOPOMOFO,
    /**
     * Cherokee
     */
    CHEROKEE,
    /**
     * Coptic
     */
    COPTIC,
    /**
     * Cyrillic
     */
    CYRILLIC,
    /**
     * Deseret
     */
    DESERET,
    /**
     * Devanagari
     */
    DEVANAGARI,
    /**
     * Ethiopic
     */
    ETHIOPIC,
    /**
     * Georgian
     */
    GEORGIAN,
    /**
     * Gothic
     */
    GOTHIC,
    /**
     * Greek
     */
    GREEK,
    /**
     * Gujarati
     */
    GUJARATI,
    /**
     * Gurmukhi
     */
    GURMUKHI,
    /**
     * Han
     */
    HAN,
    /**
     * Hangul
     */
    HANGUL,
    /**
     * Hebrew
     */
    HEBREW,
    /**
     * Hiragana
     */
    HIRAGANA,
    /**
     * Kannada
     */
    KANNADA,
    /**
     * Katakana
     */
    KATAKANA,
    /**
     * Khmer
     */
    KHMER,
    /**
     * Lao
     */
    LAO,
    /**
     * Latin
     */
    LATIN,
    /**
     * Malayalam
     */
    MALAYALAM,
    /**
     * Mongolian
     */
    MONGOLIAN,
    /**
     * Myanmar
     */
    MYANMAR,
    /**
     * Ogham
     */
    OGHAM,
    /**
     * Old Italic
     */
    OLD_ITALIC,
    /**
     * Oriya
     */
    ORIYA,
    /**
     * Runic
     */
    RUNIC,
    /**
     * Sinhala
     */
    SINHALA,
    /**
     * Syriac
     */
    SYRIAC,
    /**
     * Tamil
     */
    TAMIL,
    /**
     * Telugu
     */
    TELUGU,
    /**
     * Thaana
     */
    THAANA,
    /**
     * Thai
     */
    THAI,
    /**
     * Tibetan
     */
    TIBETAN,
    /**
     * Canadian Aboriginal
     */
    CANADIAN_ABORIGINAL,
    /**
     * Yi
     */
    YI,
    /**
     * Tagalog
     */
    TAGALOG,
    /**
     * Hanunoo
     */
    HANUNOO,
    /**
     * Buhid
     */
    BUHID,
    /**
     * Tagbanwa
     */
    TAGBANWA,
    /**
     * Braille
     */
    BRAILLE,
    /**
     * Cypriot
     */
    CYPRIOT,
    /**
     * Limbu
     */
    LIMBU,
    /**
     * Osmanya
     */
    OSMANYA,
    /**
     * Shavian
     */
    SHAVIAN,
    /**
     * Linear B
     */
    LINEAR_B,
    /**
     * Tai Le
     */
    TAI_LE,
    /**
     * Ugaritic
     */
    UGARITIC,
    /**
     * New Tai Lue. Since 1.10
     */
    NEW_TAI_LUE,
    /**
     * Buginese. Since 1.10
     */
    BUGINESE,
    /**
     * Glagolitic. Since 1.10
     */
    GLAGOLITIC,
    /**
     * Tifinagh. Since 1.10
     */
    TIFINAGH,
    /**
     * Syloti Nagri. Since 1.10
     */
    SYLOTI_NAGRI,
    /**
     * Old Persian. Since 1.10
     */
    OLD_PERSIAN,
    /**
     * Kharoshthi. Since 1.10
     */
    KHAROSHTHI,
    /**
     * an unassigned code point. Since 1.14
     */
    UNKNOWN,
    /**
     * Balinese. Since 1.14
     */
    BALINESE,
    /**
     * Cuneiform. Since 1.14
     */
    CUNEIFORM,
    /**
     * Phoenician. Since 1.14
     */
    PHOENICIAN,
    /**
     * Phags-pa. Since 1.14
     */
    PHAGS_PA,
    /**
     * N'Ko. Since 1.14
     */
    NKO,
    /**
     * Kayah Li. Since 1.20.1
     */
    KAYAH_LI,
    /**
     * Lepcha. Since 1.20.1
     */
    LEPCHA,
    /**
     * Rejang. Since 1.20.1
     */
    REJANG,
    /**
     * Sundanese. Since 1.20.1
     */
    SUNDANESE,
    /**
     * Saurashtra. Since 1.20.1
     */
    SAURASHTRA,
    /**
     * Cham. Since 1.20.1
     */
    CHAM,
    /**
     * Ol Chiki. Since 1.20.1
     */
    OL_CHIKI,
    /**
     * Vai. Since 1.20.1
     */
    VAI,
    /**
     * Carian. Since 1.20.1
     */
    CARIAN,
    /**
     * Lycian. Since 1.20.1
     */
    LYCIAN,
    /**
     * Lydian. Since 1.20.1
     */
    LYDIAN,
    /**
     * Batak. Since 1.32
     */
    BATAK,
    /**
     * Brahmi. Since 1.32
     */
    BRAHMI,
    /**
     * Mandaic. Since 1.32
     */
    MANDAIC,
    /**
     * Chakma. Since: 1.32
     */
    CHAKMA,
    /**
     * Meroitic Cursive. Since: 1.32
     */
    MEROITIC_CURSIVE,
    /**
     * Meroitic Hieroglyphs. Since: 1.32
     */
    MEROITIC_HIEROGLYPHS,
    /**
     * Miao. Since: 1.32
     */
    MIAO,
    /**
     * Sharada. Since: 1.32
     */
    SHARADA,
    /**
     * Sora Sompeng. Since: 1.32
     */
    SORA_SOMPENG,
    /**
     * Takri. Since: 1.32
     */
    TAKRI,
    /**
     * Bassa. Since: 1.40
     */
    BASSA_VAH,
    /**
     * Caucasian Albanian. Since: 1.40
     */
    CAUCASIAN_ALBANIAN,
    /**
     * Duployan. Since: 1.40
     */
    DUPLOYAN,
    /**
     * Elbasan. Since: 1.40
     */
    ELBASAN,
    /**
     * Grantha. Since: 1.40
     */
    GRANTHA,
    /**
     * Kjohki. Since: 1.40
     */
    KHOJKI,
    /**
     * Khudawadi, Sindhi. Since: 1.40
     */
    KHUDAWADI,
    /**
     * Linear A. Since: 1.40
     */
    LINEAR_A,
    /**
     * Mahajani. Since: 1.40
     */
    MAHAJANI,
    /**
     * Manichaean. Since: 1.40
     */
    MANICHAEAN,
    /**
     * Mende Kikakui. Since: 1.40
     */
    MENDE_KIKAKUI,
    /**
     * Modi. Since: 1.40
     */
    MODI,
    /**
     * Mro. Since: 1.40
     */
    MRO,
    /**
     * Nabataean. Since: 1.40
     */
    NABATAEAN,
    /**
     * Old North Arabian. Since: 1.40
     */
    OLD_NORTH_ARABIAN,
    /**
     * Old Permic. Since: 1.40
     */
    OLD_PERMIC,
    /**
     * Pahawh Hmong. Since: 1.40
     */
    PAHAWH_HMONG,
    /**
     * Palmyrene. Since: 1.40
     */
    PALMYRENE,
    /**
     * Pau Cin Hau. Since: 1.40
     */
    PAU_CIN_HAU,
    /**
     * Psalter Pahlavi. Since: 1.40
     */
    PSALTER_PAHLAVI,
    /**
     * Siddham. Since: 1.40
     */
    SIDDHAM,
    /**
     * Tirhuta. Since: 1.40
     */
    TIRHUTA,
    /**
     * Warang Citi. Since: 1.40
     */
    WARANG_CITI,
    /**
     * Ahom. Since: 1.40
     */
    AHOM,
    /**
     * Anatolian Hieroglyphs. Since: 1.40
     */
    ANATOLIAN_HIEROGLYPHS,
    /**
     * Hatran. Since: 1.40
     */
    HATRAN,
    /**
     * Multani. Since: 1.40
     */
    MULTANI,
    /**
     * Old Hungarian. Since: 1.40
     */
    OLD_HUNGARIAN,
    /**
     * Signwriting. Since: 1.40
     */
    SIGNWRITING,
}
/**
 * An enumeration specifying the width of the font relative to other designs
 * within a family.
 */
export enum Stretch {
    /**
     * ultra condensed width
     */
    ULTRA_CONDENSED,
    /**
     * extra condensed width
     */
    EXTRA_CONDENSED,
    /**
     * condensed width
     */
    CONDENSED,
    /**
     * semi condensed width
     */
    SEMI_CONDENSED,
    /**
     * the normal width
     */
    NORMAL,
    /**
     * semi expanded width
     */
    SEMI_EXPANDED,
    /**
     * expanded width
     */
    EXPANDED,
    /**
     * extra expanded width
     */
    EXTRA_EXPANDED,
    /**
     * ultra expanded width
     */
    ULTRA_EXPANDED,
}
/**
 * An enumeration specifying the various slant styles possible for a font.
 */
export enum Style {
    /**
     * the font is upright.
     */
    NORMAL,
    /**
     * the font is slanted, but in a roman style.
     */
    OBLIQUE,
    /**
     * the font is slanted in an italic style.
     */
    ITALIC,
}
/**
 * A #PangoTabAlign specifies where a tab stop appears relative to the text.
 */
export enum TabAlign {
    /**
     * the tab stop appears to the left of the text.
     */
    LEFT,
}
/**
 * The #PangoUnderline enumeration is used to specify
 * whether text should be underlined, and if so, the type
 * of underlining.
 */
export enum Underline {
    /**
     * no underline should be drawn
     */
    NONE,
    /**
     * a single underline should be drawn
     */
    SINGLE,
    /**
     * a double underline should be drawn
     */
    DOUBLE,
    /**
     * a single underline should be drawn at a
     *     position beneath the ink extents of the text being
     *     underlined. This should be used only for underlining
     *     single characters, such as for keyboard accelerators.
     *     %PANGO_UNDERLINE_SINGLE should be used for extended
     *     portions of text.
     */
    LOW,
    /**
     * a wavy underline should be drawn below.
     *     This underline is typically used to indicate an error such
     *     as a possible mispelling; in some cases a contrasting color
     *     may automatically be used. This type of underlining is
     *     available since Pango 1.4.
     */
    ERROR,
}
/**
 * An enumeration specifying capitalization variant of the font.
 */
export enum Variant {
    /**
     * A normal font.
     */
    NORMAL,
    /**
     * A font with the lower case characters
     * replaced by smaller variants of the capital characters.
     */
    SMALL_CAPS,
}
/**
 * An enumeration specifying the weight (boldness) of a font. This is a numerical
 * value ranging from 100 to 1000, but there are some predefined values:
 */
export enum Weight {
    /**
     * the thin weight (= 100; Since: 1.24)
     */
    THIN,
    /**
     * the ultralight weight (= 200)
     */
    ULTRALIGHT,
    /**
     * the light weight (= 300)
     */
    LIGHT,
    /**
     * the semilight weight (= 350; Since: 1.36.7)
     */
    SEMILIGHT,
    /**
     * the book weight (= 380; Since: 1.24)
     */
    BOOK,
    /**
     * the default weight (= 400)
     */
    NORMAL,
    /**
     * the normal weight (= 500; Since: 1.24)
     */
    MEDIUM,
    /**
     * the semibold weight (= 600)
     */
    SEMIBOLD,
    /**
     * the bold weight (= 700)
     */
    BOLD,
    /**
     * the ultrabold weight (= 800)
     */
    ULTRABOLD,
    /**
     * the heavy weight (= 900)
     */
    HEAVY,
    /**
     * the ultraheavy weight (= 1000; Since: 1.24)
     */
    ULTRAHEAVY,
}
/**
 * A #PangoWrapMode describes how to wrap the lines of a #PangoLayout to the desired width.
 */
export enum WrapMode {
    /**
     * wrap lines at word boundaries.
     */
    WORD,
    /**
     * wrap lines at character boundaries.
     */
    CHAR,
    /**
     * wrap lines at word boundaries, but fall back to character boundaries if there is not
     * enough space for a full word.
     */
    WORD_CHAR,
}
/**
 * The bits in a #PangoFontMask correspond to fields in a
 * #PangoFontDescription that have been set.
 * @bitfield 
 */
export enum FontMask {
    /**
     * the font family is specified.
     */
    FAMILY,
    /**
     * the font style is specified.
     */
    STYLE,
    /**
     * the font variant is specified.
     */
    VARIANT,
    /**
     * the font weight is specified.
     */
    WEIGHT,
    /**
     * the font stretch is specified.
     */
    STRETCH,
    /**
     * the font size is specified.
     */
    SIZE,
    /**
     * the font gravity is specified (Since: 1.16.)
     */
    GRAVITY,
    /**
     * OpenType font variations are specified (Since: 1.42)
     */
    VARIATIONS,
}
/**
 * Flags influencing the shaping process.
 * These can be passed to pango_shape_with_flags().
 * @bitfield 
 */
export enum ShapeFlags {
    /**
     * Default value.
     */
    NONE,
    /**
     * Round glyph positions
     *     and widths to whole device units. This option should
     *     be set if the target renderer can't do subpixel
     *     positioning of glyphs.
     */
    ROUND_POSITIONS,
}
/**
 * These flags affect how Pango treats characters that are normally
 * not visible in the output.
 * @bitfield 
 */
export enum ShowFlags {
    /**
     * No special treatment for invisible characters
     */
    NONE,
    /**
     * Render spaces, tabs and newlines visibly
     */
    SPACES,
    /**
     * Render line breaks visibly
     */
    LINE_BREAKS,
    /**
     * Render default-ignorable Unicode
     *      characters visibly
     */
    IGNORABLES,
}
/**
 * Whether the segment should be shifted to center around the baseline.
 * Used in vertical writing directions mostly.
 */
export const ANALYSIS_FLAG_CENTERED_BASELINE: number
/**
 * This flag is used to mark runs that hold ellipsized text,
 * in an ellipsized layout.
 */
export const ANALYSIS_FLAG_IS_ELLIPSIS: number
/**
 * This flag tells Pango to add a hyphen at the end of the
 * run during shaping.
 */
export const ANALYSIS_FLAG_NEED_HYPHEN: number
/**
 * This value can be used to set the start_index member of a #PangoAttribute
 * such that the attribute covers from the beginning of the text.
 */
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number
/**
 * A string constant defining the engine type for language engines.
 * These engines derive from #PangoEngineLang.
 */
export const ENGINE_TYPE_LANG: string
/**
 * A string constant defining the engine type for shaping engines.
 * These engines derive from #PangoEngineShape.
 */
export const ENGINE_TYPE_SHAPE: string
/**
 * The %PANGO_GLYPH_EMPTY macro represents a #PangoGlyph value that has a
 *  special meaning, which is a zero-width empty glyph.  This is useful for
 * example in shaper modules, to use as the glyph for various zero-width
 * Unicode characters (those passing pango_is_zero_width()).
 */
export const GLYPH_EMPTY: Glyph
/**
 * The %PANGO_GLYPH_INVALID_INPUT macro represents a #PangoGlyph value that has a
 * special meaning of invalid input.  #PangoLayout produces one such glyph
 * per invalid input UTF-8 byte and such a glyph is rendered as a crossed
 * box.
 * 
 * Note that this value is defined such that it has the %PANGO_GLYPH_UNKNOWN_FLAG
 * on.
 */
export const GLYPH_INVALID_INPUT: Glyph
/**
 * The %PANGO_GLYPH_UNKNOWN_FLAG macro is a flag value that can be added to
 * a #gunichar value of a valid Unicode character, to produce a #PangoGlyph
 * value, representing an unknown-character glyph for the respective #gunichar.
 */
export const GLYPH_UNKNOWN_FLAG: Glyph
/**
 * A string constant defining the render type
 * for engines that are not rendering-system specific.
 */
export const RENDER_TYPE_NONE: string
/**
 * The %PANGO_SCALE macro represents the scale between dimensions used
 * for Pango distances and device units. (The definition of device
 * units is dependent on the output device; it will typically be pixels
 * for a screen, and points for a printer.) %PANGO_SCALE is currently
 * 1024, but this may be changed in the future.
 * 
 * When setting font sizes, device units are always considered to be
 * points (as in "12 point font"), rather than pixels.
 */
export const SCALE: number
export const UNKNOWN_GLYPH_HEIGHT: number
export const UNKNOWN_GLYPH_WIDTH: number
/**
 * A macro that should be defined by the user prior to including
 * the pango.h header.
 * The definition should be one of the predefined Pango version
 * macros: %PANGO_VERSION_1_2, %PANGO_VERSION_1_4,...
 * 
 * This macro defines the earliest version of Pango that the package is
 * required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %PANGO_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
export const VERSION_MIN_REQUIRED: number
export function attr_allow_breaks_new(allow_breaks: boolean): Attribute
export function attr_background_alpha_new(alpha: number): Attribute
export function attr_background_new(red: number, green: number, blue: number): Attribute
export function attr_fallback_new(enable_fallback: boolean): Attribute
export function attr_family_new(family: string): Attribute
export function attr_font_desc_new(desc: FontDescription): Attribute
export function attr_font_features_new(features: string): Attribute
export function attr_foreground_alpha_new(alpha: number): Attribute
export function attr_foreground_new(red: number, green: number, blue: number): Attribute
export function attr_gravity_hint_new(hint: GravityHint): Attribute
export function attr_gravity_new(gravity: Gravity): Attribute
export function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute
export function attr_language_new(language: Language): Attribute
export function attr_letter_spacing_new(letter_spacing: number): Attribute
export function attr_rise_new(rise: number): Attribute
export function attr_scale_new(scale_factor: number): Attribute
export function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute
export function attr_shape_new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: object | null, copy_func: AttrDataCopyFunc | null): Attribute
export function attr_show_new(flags: ShowFlags): Attribute
export function attr_size_new(size: number): Attribute
export function attr_size_new_absolute(size: number): Attribute
export function attr_stretch_new(stretch: Stretch): Attribute
export function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute
export function attr_strikethrough_new(strikethrough: boolean): Attribute
export function attr_style_new(style: Style): Attribute
export function attr_type_get_name(type: AttrType): string | null
export function attr_type_register(name: string): AttrType
export function attr_underline_color_new(red: number, green: number, blue: number): Attribute
export function attr_underline_new(underline: Underline): Attribute
export function attr_variant_new(variant: Variant): Attribute
export function attr_weight_new(weight: Weight): Attribute
export function bidi_type_for_unichar(ch: string): BidiType
export function break_TODO(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void
export function default_break(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrs_len: number): void
export function extents_to_pixels(inclusive: Rectangle | null, nearest: Rectangle | null): void
export function find_base_dir(text: string, length: number): Direction
export function find_paragraph_boundary(text: string, length: number): [ /* paragraph_delimiter_index */ number, /* next_paragraph_start */ number ]
export function font_description_from_string(str: string): FontDescription
export function get_log_attrs(text: string, length: number, level: number, language: Language, log_attrs: LogAttr[]): void
export function get_mirror_char(ch: string, mirrored_ch: string): boolean
export function gravity_get_for_matrix(matrix: Matrix | null): Gravity
export function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravity_to_rotation(gravity: Gravity): number
export function is_zero_width(ch: string): boolean
export function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): Item[]
export function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): Item[]
export function language_from_string(language: string | null): Language | null
export function language_get_default(): Language
export function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): number
export function markup_parser_finish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attr_list */ AttrList, /* text */ string, /* accel_char */ string ]
export function markup_parser_new(accel_marker: string): GLib.MarkupParseContext
export function parse_enum(type: GObject.GType, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number, /* possible_values */ string ]
export function parse_markup(markup_text: string, length: number, accel_marker: string): [ /* returnType */ boolean, /* attr_list */ AttrList, /* text */ string, /* accel_char */ string ]
export function parse_stretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
export function parse_style(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
export function parse_variant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
export function parse_weight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
export function quantize_line_geometry(thickness: number, position: number): [ /* thickness */ number, /* position */ number ]
export function read_line(stream: object | null, str: GLib.String): number
export function reorder_items(logical_items: Item[]): Item[]
export function scan_int(pos: string): [ /* returnType */ boolean, /* pos */ string, /* out */ number ]
export function scan_string(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
export function scan_word(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
export function script_for_unichar(ch: string): Script
export function script_get_sample_language(script: Script): Language | null
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
export function shape_full(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString): void
export function shape_with_flags(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void
export function skip_space(pos: string): [ /* returnType */ boolean, /* pos */ string ]
export function split_file_list(str: string): string[]
export function tailor_break(text: string, length: number, analysis: Analysis, offset: number, log_attrs: LogAttr[]): void
export function trim_string(str: string): string
export function unichar_direction(ch: string): Direction
export function units_from_double(d: number): number
export function units_to_double(i: number): number
export function version(): number
export function version_check(required_major: number, required_minor: number, required_micro: number): string | null
export function version_string(): string
/**
 * Type of a function that can duplicate user data for an attribute.
 * @callback 
 */
export interface AttrDataCopyFunc {
    (): object | null
}
/**
 * Type of a function filtering a list of attributes.
 * @callback 
 */
export interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
/**
 * A callback function used by pango_fontset_foreach() when enumerating
 * the fonts in a fontset.
 * @callback 
 */
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoContext structure stores global information
 * used to control the itemization process.
 */
export class Context {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Context */
    /**
     * Forces a change in the context, which will cause any #PangoLayout
     * using this context to re-layout.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     */
    changed(): void
    /**
     * Retrieves the base direction for the context. See
     * pango_context_set_base_dir().
     */
    get_base_dir(): Direction
    /**
     * Retrieves the base gravity for the context. See
     * pango_context_set_base_gravity().
     */
    get_base_gravity(): Gravity
    /**
     * Retrieve the default font description for the context.
     */
    get_font_description(): FontDescription
    /**
     * Gets the #PangoFontMap used to look up fonts for this context.
     */
    get_font_map(): FontMap
    /**
     * Retrieves the gravity for the context. This is similar to
     * pango_context_get_base_gravity(), except for when the base gravity
     * is %PANGO_GRAVITY_AUTO for which pango_gravity_get_for_matrix() is used
     * to return the gravity from the current context matrix.
     */
    get_gravity(): Gravity
    /**
     * Retrieves the gravity hint for the context. See
     * pango_context_set_gravity_hint() for details.
     */
    get_gravity_hint(): GravityHint
    /**
     * Retrieves the global language tag for the context.
     */
    get_language(): Language
    /**
     * Gets the transformation matrix that will be applied when
     * rendering with this context. See pango_context_set_matrix().
     */
    get_matrix(): Matrix | null
    /**
     * Get overall metric information for a particular font
     * description.  Since the metrics may be substantially different for
     * different scripts, a language tag can be provided to indicate that
     * the metrics should be retrieved that correspond to the script(s)
     * used by that language.
     * 
     * The #PangoFontDescription is interpreted in the same way as
     * by pango_itemize(), and the family name may be a comma separated
     * list of figures. If characters from multiple of these families
     * would be used to render the string, then the returned fonts would
     * be a composite of the metrics for the fonts loaded for the
     * individual families.
     * @param desc a #PangoFontDescription structure.  %NULL means that the            font description from the context will be used.
     * @param language language tag used to determine which script to get            the metrics for. %NULL means that the language tag from the context            will be used. If no language tag is set on the context, metrics            for the default language (as determined by pango_language_get_default())            will be returned.
     */
    get_metrics(desc: FontDescription | null, language: Language | null): FontMetrics
    /**
     * Returns whether font rendering with this context should
     * round glyph positions and widths.
     */
    get_round_glyph_positions(): boolean
    /**
     * Returns the current serial number of `context`.  The serial number is
     * initialized to an small number larger than zero when a new context
     * is created and is increased whenever the context is changed using any
     * of the setter functions, or the #PangoFontMap it uses to find fonts has
     * changed. The serial may wrap, but will never have the value 0. Since it
     * can wrap, never compare it with "less than", always use "not equals".
     * 
     * This can be used to automatically detect changes to a #PangoContext, and
     * is only useful when implementing objects that need update when their
     * #PangoContext changes, like #PangoLayout.
     */
    get_serial(): number
    /**
     * List all families for a context.
     */
    list_families(): /* families */ FontFamily[]
    /**
     * Loads the font in one of the fontmaps in the context
     * that is the closest match for `desc`.
     * @param desc a #PangoFontDescription describing the font to load
     */
    load_font(desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the context that can be used to render
     * a font matching `desc`.
     * @param desc a #PangoFontDescription describing the fonts to load
     * @param language a #PangoLanguage the fonts will be used for
     */
    load_fontset(desc: FontDescription, language: Language): Fontset | null
    /**
     * Sets the base direction for the context.
     * 
     * The base direction is used in applying the Unicode bidirectional
     * algorithm; if the `direction` is %PANGO_DIRECTION_LTR or
     * %PANGO_DIRECTION_RTL, then the value will be used as the paragraph
     * direction in the Unicode bidirectional algorithm.  A value of
     * %PANGO_DIRECTION_WEAK_LTR or %PANGO_DIRECTION_WEAK_RTL is used only
     * for paragraphs that do not contain any strong characters themselves.
     * @param direction the new base direction
     */
    set_base_dir(direction: Direction): void
    /**
     * Sets the base gravity for the context.
     * 
     * The base gravity is used in laying vertical text out.
     * @param gravity the new base gravity
     */
    set_base_gravity(gravity: Gravity): void
    /**
     * Set the default font description for the context
     * @param desc the new pango font description
     */
    set_font_description(desc: FontDescription): void
    /**
     * Sets the font map to be searched when fonts are looked-up in this context.
     * This is only for internal use by Pango backends, a #PangoContext obtained
     * via one of the recommended methods should already have a suitable font map.
     * @param font_map the #PangoFontMap to set.
     */
    set_font_map(font_map: FontMap): void
    /**
     * Sets the gravity hint for the context.
     * 
     * The gravity hint is used in laying vertical text out, and is only relevant
     * if gravity of the context as returned by pango_context_get_gravity()
     * is set %PANGO_GRAVITY_EAST or %PANGO_GRAVITY_WEST.
     * @param hint the new gravity hint
     */
    set_gravity_hint(hint: GravityHint): void
    /**
     * Sets the global language tag for the context.  The default language
     * for the locale of the running process can be found using
     * pango_language_get_default().
     * @param language the new language tag.
     */
    set_language(language: Language): void
    /**
     * Sets the transformation matrix that will be applied when rendering
     * with this context. Note that reported metrics are in the user space
     * coordinates before the application of the matrix, not device-space
     * coordinates after the application of the matrix. So, they don't scale
     * with the matrix, though they may change slightly for different
     * matrices, depending on how the text is fit to the pixel grid.
     * @param matrix a #PangoMatrix, or %NULL to unset any existing matrix. (No matrix set is the same as setting the identity matrix.)
     */
    set_matrix(matrix: Matrix | null): void
    /**
     * Sets whether font rendering with this context should
     * round glyph positions and widths to integral positions,
     * in device units.
     * 
     * This is useful when the renderer can't handle subpixel
     * positioning of glyphs.
     * 
     * The default value is to round glyph positions, to remain
     * compatible with previous Pango behavior.
     * @param round_positions whether to round glyph positions
     */
    set_round_glyph_positions(round_positions: boolean): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.GType<Context>
}
export interface Coverage_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoCoverage structure represents a map from Unicode characters
 * to #PangoCoverageLevel. It is an opaque structure with no public fields.
 */
export class Coverage {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Coverage */
    /**
     * Copy an existing #PangoCoverage. (This function may now be unnecessary
     * since we refcount the structure. File a bug if you use it.)
     */
    copy(): Coverage
    /**
     * Determine whether a particular index is covered by `coverage`
     * @param index_ the index to check
     */
    get(index_: number): CoverageLevel
    /**
     * Set the coverage for each index in `coverage` to be the max (better)
     * value of the current coverage for the index and the coverage for
     * the corresponding index in `other`.
     * @param other another #PangoCoverage
     */
    max(other: Coverage): void
    /**
     * Increase the reference count on the #PangoCoverage by one
     */
    ref(): Coverage
    /**
     * Modify a particular index within `coverage`
     * @param index_ the index to modify
     * @param level the new level for `index_`
     */
    set(index_: number, level: CoverageLevel): void
    /**
     * Convert a #PangoCoverage structure into a flat binary format
     */
    to_bytes(): /* bytes */ Uint8Array
    /**
     * Decrease the reference count on the #PangoCoverage by one.
     * If the result is zero, free the coverage and all associated memory.
     */
    unref(): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Coverage_ConstructProps)
    _init (config?: Coverage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Coverage
    /**
     * Convert data generated from pango_coverage_to_bytes() back
     * to a #PangoCoverage
     * @param bytes binary data   representing a #PangoCoverage
     */
    static from_bytes(bytes: Uint8Array): Coverage | null
    static $gtype: GObject.GType<Coverage>
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * #PangoEngine is the base class for all types of language and
 * script specific engines. It has no functionality by itself.
 */
export class Engine {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    static $gtype: GObject.GType<Engine>
}
export interface EngineLang_ConstructProps extends Engine_ConstructProps {
}
/**
 * The #PangoEngineLang class is implemented by engines that
 * customize the rendering-system independent part of the
 * Pango pipeline for a particular script or language. For
 * instance, a custom #PangoEngineLang could be provided for
 * Thai to implement the dictionary-based word boundary
 * lookups needed for that language.
 */
export class EngineLang {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.EngineLang */
    vfunc_script_break(text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: EngineLang, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EngineLang, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EngineLang_ConstructProps)
    _init (config?: EngineLang_ConstructProps): void
    static $gtype: GObject.GType<EngineLang>
}
export interface EngineShape_ConstructProps extends Engine_ConstructProps {
}
/**
 * The #PangoEngineShape class is implemented by engines that
 * customize the rendering-system dependent part of the
 * Pango pipeline for a particular script or language.
 * A #PangoEngineShape implementation is then specific to both
 * a particular rendering system or group of rendering systems
 * and to a particular script. For instance, there is one
 * #PangoEngineShape implementation to handle shaping Arabic
 * for Fontconfig-based backends.
 */
export class EngineShape {
    /* Own fields of Pango-1.0.Pango.EngineShape */
    parent_instance: Engine
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.EngineShape */
    vfunc_covers(font: Font, language: Language, wc: string): CoverageLevel
    vfunc_script_shape(font: Font, item_text: string, item_length: number, analysis: Analysis, glyphs: GlyphString, paragraph_text: string, paragraph_length: number): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: EngineShape, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EngineShape, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EngineShape_ConstructProps)
    _init (config?: EngineShape_ConstructProps): void
    static $gtype: GObject.GType<EngineShape>
}
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoFont structure is used to represent
 * a font in a rendering-system-independent matter.
 * To create an implementation of a #PangoFont,
 * the rendering-system specific code should allocate
 * a larger structure that contains a nested
 * #PangoFont, fill in the <structfield>klass</structfield> member of
 * the nested #PangoFont with a pointer to
 * a appropriate #PangoFontClass, then call
 * pango_font_init() on the structure.
 * 
 * The #PangoFont structure contains one member
 * which the implementation fills in.
 */
export class Font {
    /* Own fields of Pango-1.0.Pango.Font */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Font */
    /**
     * Returns a description of the font, with font size set in points.
     * Use pango_font_describe_with_absolute_size() if you want the font
     * size in device units.
     */
    describe(): FontDescription
    /**
     * Returns a description of the font, with absolute font size set
     * (in device units). Use pango_font_describe() if you want the font
     * size in points.
     */
    describe_with_absolute_size(): FontDescription
    /**
     * Finds the best matching shaper for a font for a particular
     * language tag and character point.
     * @param language the language tag
     * @param ch a Unicode character.
     */
    find_shaper(language: Language, ch: number): EngineShape
    /**
     * Computes the coverage map for a given font and language tag.
     * @param language the language tag
     */
    get_coverage(language: Language): Coverage
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a <firstterm>weak</firstterm> reference
     * to the font map, so if all references to font map are dropped, the font
     * map will be finalized even if there are fonts created with the font
     * map that are still alive.  In that case this function will return %NULL.
     * It is the responsibility of the user to ensure that the font map is kept
     * alive.  In most uses this is not an issue as a #PangoContext holds
     * a reference to the font map.
     */
    get_font_map(): FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font. The
     * coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @param glyph the glyph index
     */
    get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets overall metric information for a font. Since the metrics may be
     * substantially different for different scripts, a language tag can
     * be provided to indicate that the metrics should be retrieved that
     * correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @param language language tag used to determine which script to get the metrics            for, or %NULL to indicate to get the metrics for the entire font.
     */
    get_metrics(language: Language | null): FontMetrics
    /**
     * Returns whether the font provides a glyph for this character.
     * 
     * Returns %TRUE if `font` can render `wc`
     * @param wc a Unicode character
     */
    has_char(wc: string): boolean
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.Font */
    /**
     * Returns a description of the font, with font size set in points.
     * Use pango_font_describe_with_absolute_size() if you want the font
     * size in device units.
     * @virtual 
     */
    vfunc_describe(): FontDescription
    vfunc_describe_absolute(): FontDescription
    /**
     * Computes the coverage map for a given font and language tag.
     * @virtual 
     * @param language the language tag
     */
    vfunc_get_coverage(language: Language): Coverage
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a <firstterm>weak</firstterm> reference
     * to the font map, so if all references to font map are dropped, the font
     * map will be finalized even if there are fonts created with the font
     * map that are still alive.  In that case this function will return %NULL.
     * It is the responsibility of the user to ensure that the font map is kept
     * alive.  In most uses this is not an issue as a #PangoContext holds
     * a reference to the font map.
     * @virtual 
     */
    vfunc_get_font_map(): FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font. The
     * coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param glyph the glyph index
     */
    vfunc_get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets overall metric information for a font. Since the metrics may be
     * substantially different for different scripts, a language tag can
     * be provided to indicate that the metrics should be retrieved that
     * correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param language language tag used to determine which script to get the metrics            for, or %NULL to indicate to get the metrics for the entire font.
     */
    vfunc_get_metrics(language: Language | null): FontMetrics
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Frees an array of font descriptions.
     * @param descs a pointer to an array of #PangoFontDescription, may be %NULL
     */
    static descriptions_free(descs: FontDescription[] | null): void
    static $gtype: GObject.GType<Font>
}
export interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoFontFace structure is used to represent a group of fonts with
 * the same family, slant, weight, width, but varying sizes.
 */
export class FontFace {
    /* Own fields of Pango-1.0.Pango.FontFace */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.FontFace */
    /**
     * Returns the family, style, variant, weight and stretch of
     * a #PangoFontFace. The size field of the resulting font description
     * will be unset.
     */
    describe(): FontDescription
    /**
     * Gets a name representing the style of this face among the
     * different faces in the #PangoFontFamily for the face. This
     * name is unique among all faces in the family and is suitable
     * for displaying to users.
     */
    get_face_name(): string
    /**
     * Returns whether a #PangoFontFace is synthesized by the underlying
     * font rendering engine from another face, perhaps by shearing, emboldening,
     * or lightening it.
     */
    is_synthesized(): boolean
    /**
     * List the available sizes for a font. This is only applicable to bitmap
     * fonts. For scalable fonts, stores %NULL at the location pointed to by
     * `sizes` and 0 at the location pointed to by `n_sizes`. The sizes returned
     * are in Pango units and are sorted in ascending order.
     */
    list_sizes(): /* sizes */ number[] | null
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.FontFace */
    /**
     * Returns the family, style, variant, weight and stretch of
     * a #PangoFontFace. The size field of the resulting font description
     * will be unset.
     * @virtual 
     */
    vfunc_describe(): FontDescription
    /**
     * Gets a name representing the style of this face among the
     * different faces in the #PangoFontFamily for the face. This
     * name is unique among all faces in the family and is suitable
     * for displaying to users.
     * @virtual 
     */
    vfunc_get_face_name(): string
    /**
     * Returns whether a #PangoFontFace is synthesized by the underlying
     * font rendering engine from another face, perhaps by shearing, emboldening,
     * or lightening it.
     * @virtual 
     */
    vfunc_is_synthesized(): boolean
    /**
     * List the available sizes for a font. This is only applicable to bitmap
     * fonts. For scalable fonts, stores %NULL at the location pointed to by
     * `sizes` and 0 at the location pointed to by `n_sizes`. The sizes returned
     * are in Pango units and are sorted in ascending order.
     * @virtual 
     */
    vfunc_list_sizes(): /* sizes */ number[] | null
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontFace_ConstructProps)
    _init (config?: FontFace_ConstructProps): void
    static $gtype: GObject.GType<FontFace>
}
export interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoFontFamily structure is used to represent a family of related
 * font faces. The faces in a family share a common design, but differ in
 * slant, weight, width and other aspects.
 */
export class FontFamily {
    /* Own fields of Pango-1.0.Pango.FontFamily */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.FontFamily */
    /**
     * Gets the name of the family. The name is unique among all
     * fonts for the font backend and can be used in a #PangoFontDescription
     * to specify that a face from this family is desired.
     */
    get_name(): string
    /**
     * A monospace font is a font designed for text display where the the
     * characters form a regular grid. For Western languages this would
     * mean that the advance width of all characters are the same, but
     * this categorization also includes Asian fonts which include
     * double-width characters: characters that occupy two grid cells.
     * g_unichar_iswide() returns a result that indicates whether a
     * character is typically double-width in a monospace font.
     * 
     * The best way to find out the grid-cell size is to call
     * pango_font_metrics_get_approximate_digit_width(), since the results
     * of pango_font_metrics_get_approximate_char_width() may be affected
     * by double-width characters.
     */
    is_monospace(): boolean
    /**
     * A variable font is a font which has axes that can be modified to
     * produce different faces.
     */
    is_variable(): boolean
    /**
     * Lists the different font faces that make up `family`. The faces
     * in a family share a common design, but differ in slant, weight,
     * width and other aspects.
     */
    list_faces(): /* faces */ FontFace[]
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.FontFamily */
    /**
     * Gets the name of the family. The name is unique among all
     * fonts for the font backend and can be used in a #PangoFontDescription
     * to specify that a face from this family is desired.
     * @virtual 
     */
    vfunc_get_name(): string
    /**
     * A monospace font is a font designed for text display where the the
     * characters form a regular grid. For Western languages this would
     * mean that the advance width of all characters are the same, but
     * this categorization also includes Asian fonts which include
     * double-width characters: characters that occupy two grid cells.
     * g_unichar_iswide() returns a result that indicates whether a
     * character is typically double-width in a monospace font.
     * 
     * The best way to find out the grid-cell size is to call
     * pango_font_metrics_get_approximate_digit_width(), since the results
     * of pango_font_metrics_get_approximate_char_width() may be affected
     * by double-width characters.
     * @virtual 
     */
    vfunc_is_monospace(): boolean
    /**
     * A variable font is a font which has axes that can be modified to
     * produce different faces.
     * @virtual 
     */
    vfunc_is_variable(): boolean
    /**
     * Lists the different font faces that make up `family`. The faces
     * in a family share a common design, but differ in slant, weight,
     * width and other aspects.
     * @virtual 
     */
    vfunc_list_faces(): /* faces */ FontFace[]
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontFamily_ConstructProps)
    _init (config?: FontFamily_ConstructProps): void
    static $gtype: GObject.GType<FontFamily>
}
export interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoFontMap represents the set of fonts available for a
 * particular rendering system. This is a virtual object with
 * implementations being specific to particular rendering systems.  To
 * create an implementation of a #PangoFontMap, the rendering-system
 * specific code should allocate a larger structure that contains a nested
 * #PangoFontMap, fill in the <structfield>klass</structfield> member of the nested #PangoFontMap with a
 * pointer to a appropriate #PangoFontMapClass, then call
 * pango_font_map_init() on the structure.
 * 
 * The #PangoFontMap structure contains one member which the implementation
 * fills in.
 */
export class FontMap {
    /* Own fields of Pango-1.0.Pango.FontMap */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.FontMap */
    /**
     * Forces a change in the context, which will cause any #PangoContext
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     */
    changed(): void
    /**
     * Creates a #PangoContext connected to `fontmap`.  This is equivalent
     * to pango_context_new() followed by pango_context_set_font_map().
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a #PangoContext.
     * For instance, the GTK+ toolkit has, among others,
     * gdk_pango_context_get_for_screen(), and
     * gtk_widget_get_pango_context().  Use those instead.
     */
    create_context(): Context
    /**
     * Returns the current serial number of `fontmap`.  The serial number is
     * initialized to an small number larger than zero when a new fontmap
     * is created and is increased whenever the fontmap is changed. It may
     * wrap, but will never have the value 0. Since it can wrap, never compare
     * it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a #PangoFontMap, like
     * in #PangoContext.
     */
    get_serial(): number
    /**
     * List all families for a fontmap.
     */
    list_families(): /* families */ FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     */
    load_font(context: Context, desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     * @param language a #PangoLanguage the fonts will be used for
     */
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.FontMap */
    /**
     * Forces a change in the context, which will cause any #PangoContext
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     * @virtual 
     */
    vfunc_changed(): void
    /**
     * Returns the current serial number of `fontmap`.  The serial number is
     * initialized to an small number larger than zero when a new fontmap
     * is created and is increased whenever the fontmap is changed. It may
     * wrap, but will never have the value 0. Since it can wrap, never compare
     * it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a #PangoFontMap, like
     * in #PangoContext.
     * @virtual 
     */
    vfunc_get_serial(): number
    /**
     * List all families for a fontmap.
     * @virtual 
     */
    vfunc_list_families(): /* families */ FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     * @virtual 
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     */
    vfunc_load_font(context: Context, desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     * @virtual 
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     * @param language a #PangoLanguage the fonts will be used for
     */
    vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.GType<FontMap>
}
export interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * A #PangoFontset represents a set of #PangoFont to use
 * when rendering text. It is the result of resolving a
 * #PangoFontDescription against a particular #PangoContext.
 * It has operations for finding the component font for
 * a particular Unicode character, and for finding a composite
 * set of metrics for the entire fontset.
 */
export class Fontset {
    /* Own fields of Pango-1.0.Pango.Fontset */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one. If `func` returns %TRUE, that stops the iteration.
     * @param func Callback function
     */
    foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best glyph for the
     * Unicode character `wc`.
     * @param wc a Unicode character
     */
    get_font(wc: number): Font
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    get_metrics(): FontMetrics
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one. If `func` returns %TRUE, that stops the iteration.
     * @virtual 
     * @param func Callback function
     */
    vfunc_foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best glyph for the
     * Unicode character `wc`.
     * @virtual 
     * @param wc a Unicode character
     */
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    /**
     * Get overall metric information for the fonts in the fontset.
     * @virtual 
     */
    vfunc_get_metrics(): FontMetrics
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Fontset_ConstructProps)
    _init (config?: Fontset_ConstructProps): void
    static $gtype: GObject.GType<Fontset>
}
export interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
/**
 * #PangoFontsetSimple is a implementation of the abstract
 * #PangoFontset base class in terms of an array of fonts,
 * which the creator provides when constructing the
 * #PangoFontsetSimple.
 */
export class FontsetSimple {
    /* Extended fields of Pango-1.0.Pango.Fontset */
    parent_instance: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.FontsetSimple */
    /**
     * Adds a font to the fontset.
     * @param font a #PangoFont.
     */
    append(font: Font): void
    /**
     * Returns the number of fonts in the fontset.
     */
    size(): number
    /* Extended methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one. If `func` returns %TRUE, that stops the iteration.
     * @param func Callback function
     */
    foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best glyph for the
     * Unicode character `wc`.
     * @param wc a Unicode character
     */
    get_font(wc: number): Font
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    get_metrics(): FontMetrics
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one. If `func` returns %TRUE, that stops the iteration.
     * @virtual 
     * @param func Callback function
     */
    vfunc_foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best glyph for the
     * Unicode character `wc`.
     * @virtual 
     * @param wc a Unicode character
     */
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    /**
     * Get overall metric information for the fonts in the fontset.
     * @virtual 
     */
    vfunc_get_metrics(): FontMetrics
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontsetSimple_ConstructProps)
    _init (config?: FontsetSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(language: Language): FontsetSimple
    static $gtype: GObject.GType<FontsetSimple>
}
export interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The #PangoLayout structure represents an entire paragraph
 * of text. It is initialized with a #PangoContext, UTF-8 string
 * and set of attributes for that string. Once that is done, the
 * set of formatted lines can be extracted from the object,
 * the layout can be rendered, and conversion between logical
 * character positions within the layout's text, and the physical
 * position of the resulting glyphs can be made.
 * 
 * There are also a number of parameters to adjust the formatting
 * of a #PangoLayout, which are illustrated in <xref linkend="parameters"/>.
 * It is possible, as well, to ignore the 2-D setup, and simply
 * treat the results of a #PangoLayout as a list of lines.
 * 
 * <figure id="parameters">
 * <title>Adjustable parameters (on the left) and font metrics (on the right) for a PangoLayout</title>
 * <graphic fileref="layout.png" format="PNG"></graphic>
 * </figure>
 * 
 * The #PangoLayout structure is opaque, and has no user-visible
 * fields.
 */
export class Layout {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Layout */
    /**
     * Forces recomputation of any state in the #PangoLayout that
     * might depend on the layout's context. This function should
     * be called if you make changes to the context subsequent
     * to creating the layout.
     */
    context_changed(): void
    /**
     * Does a deep copy-by-value of the `src` layout. The attribute list,
     * tab array, and text from the original layout are all copied by
     * value.
     */
    copy(): Layout
    /**
     * Gets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     */
    get_alignment(): Alignment
    /**
     * Gets the attribute list for the layout, if any.
     */
    get_attributes(): AttrList
    /**
     * Gets whether to calculate the bidirectional base direction
     * for the layout according to the contents of the layout.
     * See pango_layout_set_auto_dir().
     */
    get_auto_dir(): boolean
    /**
     * Gets the Y position of baseline of the first line in `layout`.
     */
    get_baseline(): number
    /**
     * Returns the number of Unicode characters in the
     * the text of `layout`.
     */
    get_character_count(): number
    /**
     * Retrieves the #PangoContext used for this layout.
     */
    get_context(): Context
    /**
     * Given an index within a layout, determines the positions that of the
     * strong and weak cursors if the insertion point is at that
     * index. The position of each cursor is stored as a zero-width
     * rectangle. The strong cursor location is the location where
     * characters of the directionality equal to the base direction of the
     * layout are inserted.  The weak cursor location is the location
     * where characters of the directionality opposite to the base
     * direction of the layout are inserted.
     * @param index_ the byte index of the cursor
     */
    get_cursor_pos(index_: number): [ /* strong_pos */ Rectangle, /* weak_pos */ Rectangle ]
    /**
     * Gets the type of ellipsization being performed for `layout`.
     * See pango_layout_set_ellipsize()
     */
    get_ellipsize(): EllipsizeMode
    /**
     * Computes the logical and ink extents of `layout`. Logical extents
     * are usually what you want for positioning things.  Note that both extents
     * may have non-zero x and y.  You may want to use those to offset where you
     * render the layout.  Not doing that is a very typical bug that shows up as
     * right-to-left layouts not being correctly positioned in a layout with
     * a set width.
     * 
     * The extents are given in layout coordinates and in Pango units; layout
     * coordinates begin at the top left corner of the layout.
     */
    get_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets the font description for the layout, if any.
     */
    get_font_description(): FontDescription | null
    /**
     * Gets the height of layout used for ellipsization.  See
     * pango_layout_set_height() for details.
     */
    get_height(): number
    /**
     * Gets the paragraph indent width in Pango units. A negative value
     * indicates a hanging indentation.
     */
    get_indent(): number
    /**
     * Returns an iterator to iterate over the visual extents of the layout.
     */
    get_iter(): LayoutIter
    /**
     * Gets whether each complete line should be stretched to fill the entire
     * width of the layout.
     */
    get_justify(): boolean
    /**
     * Retrieves a particular line from a #PangoLayout.
     * 
     * Use the faster pango_layout_get_line_readonly() if you do not plan
     * to modify the contents of the line (glyphs, glyph widths, etc.).
     * @param line the index of a line, which must be between 0 and        <literal>pango_layout_get_line_count(layout) - 1</literal>, inclusive.
     */
    get_line(line: number): LayoutLine | null
    /**
     * Retrieves the count of lines for the `layout`.
     */
    get_line_count(): number
    /**
     * Retrieves a particular line from a #PangoLayout.
     * 
     * This is a faster alternative to pango_layout_get_line(),
     * but the user is not expected
     * to modify the contents of the line (glyphs, glyph widths, etc.).
     * @param line the index of a line, which must be between 0 and        <literal>pango_layout_get_line_count(layout) - 1</literal>, inclusive.
     */
    get_line_readonly(line: number): LayoutLine | null
    /**
     * Gets the value that has been
     * set with pango_layout_set_line_spacing().
     */
    get_line_spacing(): number
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * Use the faster pango_layout_get_lines_readonly() if you do not plan
     * to modify the contents of the lines (glyphs, glyph widths, etc.).
     */
    get_lines(): LayoutLine[]
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * This is a faster alternative to pango_layout_get_lines(),
     * but the user is not expected
     * to modify the contents of the lines (glyphs, glyph widths, etc.).
     */
    get_lines_readonly(): LayoutLine[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     */
    get_log_attrs(): /* attrs */ LogAttr[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     * 
     * This is a faster alternative to pango_layout_get_log_attrs().
     * The returned array is part of `layout` and must not be modified.
     * Modifying the layout will invalidate the returned array.
     * 
     * The number of attributes returned in `n_attrs` will be one more
     * than the total number of characters in the layout, since there
     * need to be attributes corresponding to both the position before
     * the first character and the position after the last character.
     */
    get_log_attrs_readonly(): LogAttr[]
    /**
     * Computes the logical and ink extents of `layout` in device units.
     * This function just calls pango_layout_get_extents() followed by
     * two pango_extents_to_pixels() calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to pango_extents_to_pixels()).
     */
    get_pixel_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Determines the logical width and height of a #PangoLayout
     * in device units. (pango_layout_get_size() returns the width
     * and height scaled by %PANGO_SCALE.) This
     * is simply a convenience function around
     * pango_layout_get_pixel_extents().
     */
    get_pixel_size(): [ /* width */ number, /* height */ number ]
    /**
     * Returns the current serial number of `layout`.  The serial number is
     * initialized to an small number  larger than zero when a new layout
     * is created and is increased whenever the layout is changed using any
     * of the setter functions, or the #PangoContext it uses has changed.
     * The serial may wrap, but will never have the value 0. Since it
     * can wrap, never compare it with "less than", always use "not equals".
     * 
     * This can be used to automatically detect changes to a #PangoLayout, and
     * is useful for example to decide whether a layout needs redrawing.
     * To force the serial to be increased, use pango_layout_context_changed().
     */
    get_serial(): number
    /**
     * Obtains the value set by pango_layout_set_single_paragraph_mode().
     */
    get_single_paragraph_mode(): boolean
    /**
     * Determines the logical width and height of a #PangoLayout
     * in Pango units (device units scaled by %PANGO_SCALE). This
     * is simply a convenience function around pango_layout_get_extents().
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Gets the amount of spacing between the lines of the layout.
     */
    get_spacing(): number
    /**
     * Gets the current #PangoTabArray used by this layout. If no
     * #PangoTabArray has been set, then the default tabs are in use
     * and %NULL is returned. Default tabs are every 8 spaces.
     * The return value should be freed with pango_tab_array_free().
     */
    get_tabs(): TabArray | null
    /**
     * Gets the text in the layout. The returned text should not
     * be freed or modified.
     */
    get_text(): string
    /**
     * Counts the number unknown glyphs in `layout`.  That is, zero if
     * glyphs for all characters in the layout text were found, or more
     * than zero otherwise.
     * 
     * This function can be used to determine if there are any fonts
     * available to render all characters in a certain string, or when
     * used in combination with %PANGO_ATTR_FALLBACK, to check if a
     * certain font supports all the characters in the string.
     */
    get_unknown_glyphs_count(): number
    /**
     * Gets the width to which the lines of the #PangoLayout should wrap.
     */
    get_width(): number
    /**
     * Gets the wrap mode for the layout.
     * 
     * Use pango_layout_is_wrapped() to query whether any paragraphs
     * were actually wrapped.
     */
    get_wrap(): WrapMode
    /**
     * Converts from byte `index_` within the `layout` to line and X position.
     * (X position is measured from the left edge of the line)
     * @param index_ the byte index of a grapheme within the layout.
     * @param trailing an integer indicating the edge of the grapheme to retrieve the             position of. If > 0, the trailing edge of the grapheme, if 0,             the leading of the grapheme.
     */
    index_to_line_x(index_: number, trailing: boolean): [ /* line */ number, /* x_pos */ number ]
    /**
     * Converts from an index within a #PangoLayout to the onscreen position
     * corresponding to the grapheme at that index, which is represented
     * as rectangle.  Note that <literal>pos->x</literal> is always the leading
     * edge of the grapheme and <literal>pos->x + pos->width</literal> the trailing
     * edge of the grapheme. If the directionality of the grapheme is right-to-left,
     * then <literal>pos->width</literal> will be negative.
     * @param index_ byte index within `layout`
     */
    index_to_pos(index_: number): /* pos */ Rectangle
    /**
     * Queries whether the layout had to ellipsize any paragraphs.
     * 
     * This returns %TRUE if the ellipsization mode for `layout`
     * is not %PANGO_ELLIPSIZE_NONE, a positive width is set on `layout,`
     * and there are paragraphs exceeding that width that have to be
     * ellipsized.
     */
    is_ellipsized(): boolean
    /**
     * Queries whether the layout had to wrap any paragraphs.
     * 
     * This returns %TRUE if a positive width is set on `layout,`
     * ellipsization mode of `layout` is set to %PANGO_ELLIPSIZE_NONE,
     * and there are paragraphs exceeding the layout width that have
     * to be wrapped.
     */
    is_wrapped(): boolean
    /**
     * Computes a new cursor position from an old position and
     * a count of positions to move visually. If `direction` is positive,
     * then the new strong cursor position will be one position
     * to the right of the old cursor position. If `direction` is negative,
     * then the new strong cursor position will be one position
     * to the left of the old cursor position.
     * 
     * In the presence of bidirectional text, the correspondence
     * between logical and visual order will depend on the direction
     * of the current run, and there may be jumps when the cursor
     * is moved off of the end of a run.
     * 
     * Motion here is in cursor positions, not in characters, so a
     * single call to pango_layout_move_cursor_visually() may move the
     * cursor over multiple characters when multiple characters combine
     * to form a single grapheme.
     * @param strong whether the moving cursor is the strong cursor or the                weak cursor. The strong cursor is the cursor corresponding                to text insertion in the base direction for the layout.
     * @param old_index the byte index of the grapheme for the old index
     * @param old_trailing if 0, the cursor was at the leading edge of the                grapheme indicated by `old_index,` if > 0, the cursor                was at the trailing edge.
     * @param direction direction to move cursor. A negative                value indicates motion to the left.
     */
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [ /* new_index */ number, /* new_trailing */ number ]
    /**
     * Sets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     * @param alignment the alignment
     */
    set_alignment(alignment: Alignment): void
    /**
     * Sets the text attributes for a layout object.
     * References `attrs,` so the caller can unref its reference.
     * @param attrs a #PangoAttrList, can be %NULL
     */
    set_attributes(attrs: AttrList | null): void
    /**
     * Sets whether to calculate the bidirectional base direction
     * for the layout according to the contents of the layout;
     * when this flag is on (the default), then paragraphs in
     *    `layout` that begin with strong right-to-left characters
     * (Arabic and Hebrew principally), will have right-to-left
     * layout, paragraphs with letters from other scripts will
     * have left-to-right layout. Paragraphs with only neutral
     * characters get their direction from the surrounding paragraphs.
     * 
     * When %FALSE, the choice between left-to-right and
     * right-to-left layout is done according to the base direction
     * of the layout's #PangoContext. (See pango_context_set_base_dir()).
     * 
     * When the auto-computed direction of a paragraph differs from the
     * base direction of the context, the interpretation of
     * %PANGO_ALIGN_LEFT and %PANGO_ALIGN_RIGHT are swapped.
     * @param auto_dir if %TRUE, compute the bidirectional base direction   from the layout's contents.
     */
    set_auto_dir(auto_dir: boolean): void
    /**
     * Sets the type of ellipsization being performed for `layout`.
     * Depending on the ellipsization mode `ellipsize` text is
     * removed from the start, middle, or end of text so they
     * fit within the width and height of layout set with
     * pango_layout_set_width() and pango_layout_set_height().
     * 
     * If the layout contains characters such as newlines that
     * force it to be layed out in multiple paragraphs, then whether
     * each paragraph is ellipsized separately or the entire layout
     * is ellipsized as a whole depends on the set height of the layout.
     * See pango_layout_set_height() for details.
     * @param ellipsize the new ellipsization mode for `layout`
     */
    set_ellipsize(ellipsize: EllipsizeMode): void
    /**
     * Sets the default font description for the layout. If no font
     * description is set on the layout, the font description from
     * the layout's context is used.
     * @param desc the new #PangoFontDescription, or %NULL to unset the        current font description
     */
    set_font_description(desc: FontDescription | null): void
    /**
     * Sets the height to which the #PangoLayout should be ellipsized at.  There
     * are two different behaviors, based on whether `height` is positive or
     * negative.
     * 
     * If `height` is positive, it will be the maximum height of the layout.  Only
     * lines would be shown that would fit, and if there is any text omitted,
     * an ellipsis added.  At least one line is included in each paragraph regardless
     * of how small the height value is.  A value of zero will render exactly one
     * line for the entire layout.
     * 
     * If `height` is negative, it will be the (negative of) maximum number of lines per
     * paragraph.  That is, the total number of lines shown may well be more than
     * this value if the layout contains multiple paragraphs of text.
     * The default value of -1 means that first line of each paragraph is ellipsized.
     * This behvaior may be changed in the future to act per layout instead of per
     * paragraph.  File a bug against pango at <ulink
     * url="http://bugzilla.gnome.org/">http://bugzilla.gnome.org/</ulink> if your
     * code relies on this behavior.
     * 
     * Height setting only has effect if a positive width is set on
     * `layout` and ellipsization mode of `layout` is not %PANGO_ELLIPSIZE_NONE.
     * The behavior is undefined if a height other than -1 is set and
     * ellipsization mode is set to %PANGO_ELLIPSIZE_NONE, and may change in the
     * future.
     * @param height the desired height of the layout in Pango units if positive,          or desired number of lines if negative.
     */
    set_height(height: number): void
    /**
     * Sets the width in Pango units to indent each paragraph. A negative value
     * of `indent` will produce a hanging indentation. That is, the first line will
     * have the full width, and subsequent lines will be indented by the
     * absolute value of `indent`.
     * 
     * The indent setting is ignored if layout alignment is set to
     * %PANGO_ALIGN_CENTER.
     * @param indent the amount by which to indent.
     */
    set_indent(indent: number): void
    /**
     * Sets whether each complete line should be stretched to
     * fill the entire width of the layout. This stretching is typically
     * done by adding whitespace, but for some scripts (such as Arabic),
     * the justification may be done in more complex ways, like extending
     * the characters.
     * 
     * Note that this setting is not implemented and so is ignored in Pango
     * older than 1.18.
     * @param justify whether the lines in the layout should be justified.
     */
    set_justify(justify: boolean): void
    /**
     * Sets a factor for line spacing.
     * Typical values are: 0, 1, 1.5, 2.
     * The default values is 0.
     * 
     * If `factor` is non-zero, lines are placed
     * so that
     * 
     * baseline2 = baseline1 + factor * height2
     * 
     * where height2 is the line height of the
     * second line (as determined by the font(s)).
     * In this case, the spacing set with
     * pango_layout_set_spacing() is ignored.
     * 
     * If `factor` is zero, spacing is applied as
     * before.
     * @param factor the new line spacing factor
     */
    set_line_spacing(factor: number): void
    /**
     * Same as pango_layout_set_markup_with_accel(), but
     * the markup text isn't scanned for accelerators.
     * @param markup marked-up text
     * @param length length of marked-up text in bytes, or -1 if `markup` is          null-terminated
     */
    set_markup(markup: string, length: number): void
    /**
     * Sets the layout text and attribute list from marked-up text (see
     * <link linkend="PangoMarkupFormat">markup format</link>). Replaces
     * the current text and attribute list.
     * 
     * If `accel_marker` is nonzero, the given character will mark the
     * character following it as an accelerator. For example, `accel_marker`
     * might be an ampersand or underscore. All characters marked
     * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
     * and the first character so marked will be returned in `accel_char`.
     * Two `accel_marker` characters following each other produce a single
     * literal `accel_marker` character.
     * @param markup marked-up text (see <link linkend="PangoMarkupFormat">markup format</link>)
     * @param length length of marked-up text in bytes, or -1 if `markup` is          null-terminated
     * @param accel_marker marker for accelerators in the text
     */
    set_markup_with_accel(markup: string, length: number, accel_marker: string): /* accel_char */ string
    /**
     * If `setting` is %TRUE, do not treat newlines and similar characters
     * as paragraph separators; instead, keep all text in a single paragraph,
     * and display a glyph for paragraph separator characters. Used when
     * you want to allow editing of newlines on a single text line.
     * @param setting new setting
     */
    set_single_paragraph_mode(setting: boolean): void
    /**
     * Sets the amount of spacing in Pango unit between
     * the lines of the layout. When placing lines with
     * spacing, Pango arranges things so that
     * 
     * line2.top = line1.bottom + spacing
     * 
     * Note: Since 1.44, Pango defaults to using the
     * line height (as determined by the font) for placing
     * lines. The `spacing` set with this function is only
     * taken into account when the line-height factor is
     * set to zero with pango_layout_set_line_spacing().
     * @param spacing the amount of spacing
     */
    set_spacing(spacing: number): void
    /**
     * Sets the tabs to use for `layout,` overriding the default tabs
     * (by default, tabs are every 8 spaces). If `tabs` is %NULL, the default
     * tabs are reinstated. `tabs` is copied into the layout; you must
     * free your copy of `tabs` yourself.
     * @param tabs a #PangoTabArray, or %NULL
     */
    set_tabs(tabs: TabArray | null): void
    /**
     * Sets the text of the layout.
     * 
     * This function validates `text` and renders invalid UTF-8
     * with a placeholder glyph.
     * 
     * Note that if you have used pango_layout_set_markup() or
     * pango_layout_set_markup_with_accel() on `layout` before, you may
     * want to call pango_layout_set_attributes() to clear the attributes
     * set on the layout from the markup as this function does not clear
     * attributes.
     * @param text the text
     * @param length maximum length of `text,` in bytes. -1 indicates that          the string is nul-terminated and the length should be          calculated.  The text will also be truncated on          encountering a nul-termination even when `length` is          positive.
     */
    set_text(text: string, length: number): void
    /**
     * Sets the width to which the lines of the #PangoLayout should wrap or
     * ellipsized.  The default value is -1: no width set.
     * @param width the desired width in Pango units, or -1 to indicate that no         wrapping or ellipsization should be performed.
     */
    set_width(width: number): void
    /**
     * Sets the wrap mode; the wrap mode only has effect if a width
     * is set on the layout with pango_layout_set_width().
     * To turn off wrapping, set the width to -1.
     * @param wrap the wrap mode
     */
    set_wrap(wrap: WrapMode): void
    /**
     * Converts from X and Y position within a layout to the byte
     * index to the character at that logical position. If the
     * Y position is not inside the layout, the closest position is chosen
     * (the position will be clamped inside the layout). If the
     * X position is not within the layout, then the start or the
     * end of the line is chosen as described for pango_layout_line_x_to_index().
     * If either the X or Y positions were not inside the layout, then the
     * function returns %FALSE; on an exact hit, it returns %TRUE.
     * @param x the X offset (in Pango units)             from the left edge of the layout.
     * @param y the Y offset (in Pango units)             from the top edge of the layout
     */
    xy_to_index(x: number, y: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Layout_ConstructProps)
    _init (config?: Layout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): Layout
    static $gtype: GObject.GType<Layout>
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * #PangoRenderer is a base class for objects that are used to
 * render Pango objects such as #PangoGlyphString and
 * #PangoLayout.
 */
export class Renderer {
    /* Own fields of Pango-1.0.Pango.Renderer */
    /**
     * the current transformation matrix for
     *    the Renderer; may be %NULL, which should be treated the
     *    same as the identity matrix.
     */
    matrix: Matrix
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Pango-1.0.Pango.Renderer */
    /**
     * Does initial setup before rendering operations on `renderer`.
     * pango_renderer_deactivate() should be called when done drawing.
     * Calls such as pango_renderer_draw_layout() automatically
     * activate the layout before drawing on it. Calls to
     * pango_renderer_activate() and pango_renderer_deactivate() can
     * be nested and the renderer will only be initialized and
     * deinitialized once.
     */
    activate(): void
    /**
     * Cleans up after rendering operations on `renderer`. See
     * docs for pango_renderer_activate().
     */
    deactivate(): void
    /**
     * Draw a squiggly line that approximately covers the given rectangle
     * in the style of an underline used to indicate a spelling error.
     * (The width of the underline is rounded to an integer number
     * of up/down segments and the resulting rectangle is centered
     * in the original rectangle)
     * 
     * This should be called while `renderer` is already active.  Use
     * pango_renderer_activate() to activate a renderer.
     * @param x X coordinate of underline, in Pango units in user coordinate system
     * @param y Y coordinate of underline, in Pango units in user coordinate system
     * @param width width of underline, in Pango units in user coordinate system
     * @param height height of underline, in Pango units in user coordinate system
     */
    draw_error_underline(x: number, y: number, width: number, height: number): void
    /**
     * Draws a single glyph with coordinates in device space.
     * @param font a #PangoFont
     * @param glyph the glyph index of a single glyph
     * @param x X coordinate of left edge of baseline of glyph
     * @param y Y coordinate of left edge of baseline of glyph
     */
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    /**
     * Draws the glyphs in `glyph_item` with the specified #PangoRenderer,
     * embedding the text associated with the glyphs in the output if the
     * output format supports it (PDF for example).
     * 
     * Note that `text` is the start of the text for layout, which is then
     * indexed by <literal>`glyph_item->`item->offset</literal>.
     * 
     * If `text` is %NULL, this simply calls pango_renderer_draw_glyphs().
     * 
     * The default implementation of this method simply falls back to
     * pango_renderer_draw_glyphs().
     * @param text the UTF-8 text that `glyph_item` refers to, or %NULL
     * @param glyph_item a #PangoGlyphItem
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    /**
     * Draws the glyphs in `glyphs` with the specified #PangoRenderer.
     * @param font a #PangoFont
     * @param glyphs a #PangoGlyphString
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws `layout` with the specified #PangoRenderer.
     * @param layout a #PangoLayout
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    draw_layout(layout: Layout, x: number, y: number): void
    /**
     * Draws `line` with the specified #PangoRenderer.
     * @param line a #PangoLayoutLine
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    draw_layout_line(line: LayoutLine, x: number, y: number): void
    /**
     * Draws an axis-aligned rectangle in user space coordinates with the
     * specified #PangoRenderer.
     * 
     * This should be called while `renderer` is already active.  Use
     * pango_renderer_activate() to activate a renderer.
     * @param part type of object this rectangle is part of
     * @param x X position at which to draw rectangle, in user space coordinates in Pango units
     * @param y Y position at which to draw rectangle, in user space coordinates in Pango units
     * @param width width of rectangle in Pango units in user space coordinates
     * @param height height of rectangle in Pango units in user space coordinates
     */
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    /**
     * Draws a trapezoid with the parallel sides aligned with the X axis
     * using the given #PangoRenderer; coordinates are in device space.
     * @param part type of object this trapezoid is part of
     * @param y1_ Y coordinate of top of trapezoid
     * @param x11 X coordinate of left end of top of trapezoid
     * @param x21 X coordinate of right end of top of trapezoid
     * @param y2 Y coordinate of bottom of trapezoid
     * @param x12 X coordinate of left end of bottom of trapezoid
     * @param x22 X coordinate of right end of bottom of trapezoid
     */
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    /**
     * Gets the current alpha for the specified part.
     * @param part the part to get the alpha for
     */
    get_alpha(part: RenderPart): number
    /**
     * Gets the current rendering color for the specified part.
     * @param part the part to get the color for
     */
    get_color(part: RenderPart): Color | null
    /**
     * Gets the layout currently being rendered using `renderer`.
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout should not be modified while still being
     * rendered.
     */
    get_layout(): Layout | null
    /**
     * Gets the layout line currently being rendered using `renderer`.
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout line should not be modified while still being
     * rendered.
     */
    get_layout_line(): LayoutLine | null
    /**
     * Gets the transformation matrix that will be applied when
     * rendering. See pango_renderer_set_matrix().
     */
    get_matrix(): Matrix | null
    /**
     * Informs Pango that the way that the rendering is done
     * for `part` has changed in a way that would prevent multiple
     * pieces being joined together into one drawing call. For
     * instance, if a subclass of #PangoRenderer was to add a stipple
     * option for drawing underlines, it needs to call
     * 
     * <informalexample><programlisting>
     * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
     * </programlisting></informalexample>
     * 
     * When the stipple changes or underlines with different stipples
     * might be joined together. Pango automatically calls this for
     * changes to colors. (See pango_renderer_set_color())
     * @param part the part for which rendering has changed.
     */
    part_changed(part: RenderPart): void
    /**
     * Sets the alpha for part of the rendering.
     * Note that the alpha may only be used if a color is
     * specified for `part` as well.
     * @param part the part to set the alpha for
     * @param alpha an alpha value between 1 and 65536, or 0 to unset the alpha
     */
    set_alpha(part: RenderPart, alpha: number): void
    /**
     * Sets the color for part of the rendering.
     * Also see pango_renderer_set_alpha().
     * @param part the part to change the color of
     * @param color the new color or %NULL to unset the current color
     */
    set_color(part: RenderPart, color: Color | null): void
    /**
     * Sets the transformation matrix that will be applied when rendering.
     * @param matrix a #PangoMatrix, or %NULL to unset any existing matrix.  (No matrix set is the same as setting the identity matrix.)
     */
    set_matrix(matrix: Matrix | null): void
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Own virtual methods of Pango-1.0.Pango.Renderer */
    vfunc_begin(): void
    /**
     * Draw a squiggly line that approximately covers the given rectangle
     * in the style of an underline used to indicate a spelling error.
     * (The width of the underline is rounded to an integer number
     * of up/down segments and the resulting rectangle is centered
     * in the original rectangle)
     * 
     * This should be called while `renderer` is already active.  Use
     * pango_renderer_activate() to activate a renderer.
     * @virtual 
     * @param x X coordinate of underline, in Pango units in user coordinate system
     * @param y Y coordinate of underline, in Pango units in user coordinate system
     * @param width width of underline, in Pango units in user coordinate system
     * @param height height of underline, in Pango units in user coordinate system
     */
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    /**
     * Draws a single glyph with coordinates in device space.
     * @virtual 
     * @param font a #PangoFont
     * @param glyph the glyph index of a single glyph
     * @param x X coordinate of left edge of baseline of glyph
     * @param y Y coordinate of left edge of baseline of glyph
     */
    vfunc_draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    /**
     * Draws the glyphs in `glyph_item` with the specified #PangoRenderer,
     * embedding the text associated with the glyphs in the output if the
     * output format supports it (PDF for example).
     * 
     * Note that `text` is the start of the text for layout, which is then
     * indexed by <literal>`glyph_item->`item->offset</literal>.
     * 
     * If `text` is %NULL, this simply calls pango_renderer_draw_glyphs().
     * 
     * The default implementation of this method simply falls back to
     * pango_renderer_draw_glyphs().
     * @virtual 
     * @param text the UTF-8 text that `glyph_item` refers to, or %NULL
     * @param glyph_item a #PangoGlyphItem
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    vfunc_draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    /**
     * Draws the glyphs in `glyphs` with the specified #PangoRenderer.
     * @virtual 
     * @param font a #PangoFont
     * @param glyphs a #PangoGlyphString
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates    in Pango units.
     */
    vfunc_draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws an axis-aligned rectangle in user space coordinates with the
     * specified #PangoRenderer.
     * 
     * This should be called while `renderer` is already active.  Use
     * pango_renderer_activate() to activate a renderer.
     * @virtual 
     * @param part type of object this rectangle is part of
     * @param x X position at which to draw rectangle, in user space coordinates in Pango units
     * @param y Y position at which to draw rectangle, in user space coordinates in Pango units
     * @param width width of rectangle in Pango units in user space coordinates
     * @param height height of rectangle in Pango units in user space coordinates
     */
    vfunc_draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: AttrShape, x: number, y: number): void
    /**
     * Draws a trapezoid with the parallel sides aligned with the X axis
     * using the given #PangoRenderer; coordinates are in device space.
     * @virtual 
     * @param part type of object this trapezoid is part of
     * @param y1_ Y coordinate of top of trapezoid
     * @param x11 X coordinate of left end of top of trapezoid
     * @param x21 X coordinate of right end of top of trapezoid
     * @param y2 Y coordinate of bottom of trapezoid
     * @param x12 X coordinate of left end of bottom of trapezoid
     * @param x22 X coordinate of right end of bottom of trapezoid
     */
    vfunc_draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    /**
     * Informs Pango that the way that the rendering is done
     * for `part` has changed in a way that would prevent multiple
     * pieces being joined together into one drawing call. For
     * instance, if a subclass of #PangoRenderer was to add a stipple
     * option for drawing underlines, it needs to call
     * 
     * <informalexample><programlisting>
     * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
     * </programlisting></informalexample>
     * 
     * When the stipple changes or underlines with different stipples
     * might be joined together. Pango automatically calls this for
     * changes to colors. (See pango_renderer_set_color())
     * @virtual 
     * @param part the part for which rendering has changed.
     */
    vfunc_part_changed(part: RenderPart): void
    vfunc_prepare_run(run: LayoutRun): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.GType<Renderer>
}
/**
 * The #PangoAnalysis structure stores information about
 * the properties of a segment of text.
 */
export class Analysis {
    /* Own fields of Pango-1.0.Pango.Analysis */
    /**
     * unused
     */
    shape_engine: EngineShape
    /**
     * unused
     */
    lang_engine: EngineLang
    /**
     * the font for this segment.
     */
    font: Font
    /**
     * the bidirectional level for this segment.
     */
    level: number
    /**
     * the glyph orientation for this segment (A #PangoGravity).
     */
    gravity: number
    /**
     * boolean flags for this segment (Since: 1.16).
     */
    flags: number
    /**
     * the detected script for this segment (A #PangoScript) (Since: 1.18).
     */
    script: number
    /**
     * the detected language for this segment.
     */
    language: Language
    /**
     * extra attributes for this segment.
     */
    extra_attrs: object[]
    static name: string
}
/**
 * The #PangoAttrClass structure stores the type and operations for
 * a particular type of attribute. The functions in this structure should
 * not be called directly. Instead, one should use the wrapper functions
 * provided for #PangoAttribute.
 */
export class AttrClass {
    /* Own fields of Pango-1.0.Pango.AttrClass */
    /**
     * the type ID for this attribute
     */
    type: AttrType
    copy: (attr: Attribute) => Attribute
    destroy: (attr: Attribute) => void
    equal: (attr1: Attribute, attr2: Attribute) => boolean
    static name: string
}
/**
 * The #PangoAttrColor structure is used to represent attributes that
 * are colors.
 */
export class AttrColor {
    /* Own fields of Pango-1.0.Pango.AttrColor */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the #PangoColor which is the value of the attribute
     */
    color: Color
    static name: string
}
/**
 * The #PangoAttrFloat structure is used to represent attributes with
 * a float or double value.
 */
export class AttrFloat {
    /* Own fields of Pango-1.0.Pango.AttrFloat */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the value of the attribute
     */
    value: number
    static name: string
}
/**
 * The #PangoAttrFontDesc structure is used to store an attribute that
 * sets all aspects of the font description at once.
 */
export class AttrFontDesc {
    /* Own fields of Pango-1.0.Pango.AttrFontDesc */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the font description which is the value of this attribute
     */
    desc: FontDescription
    static name: string
}
/**
 * The #PangoAttrFontFeatures structure is used to represent OpenType
 * font features as an attribute.
 */
export class AttrFontFeatures {
    /* Own fields of Pango-1.0.Pango.AttrFontFeatures */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the featues, as a string in CSS syntax
     */
    features: string
    static name: string
}
/**
 * The #PangoAttrInt structure is used to represent attributes with
 * an integer or enumeration value.
 */
export class AttrInt {
    /* Own fields of Pango-1.0.Pango.AttrInt */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the value of the attribute
     */
    value: number
    static name: string
}
/**
 * The #PangoAttrIterator structure is used to represent an
 * iterator through a #PangoAttrList. A new iterator is created
 * with pango_attr_list_get_iterator(). Once the iterator
 * is created, it can be advanced through the style changes
 * in the text using pango_attr_iterator_next(). At each
 * style change, the range of the current style segment and the
 * attributes currently in effect can be queried.
 */
export class AttrIterator {
    /* Owm methods of Pango-1.0.Pango.AttrIterator */
    /**
     * Copy a #PangoAttrIterator
     */
    copy(): AttrIterator
    /**
     * Destroy a #PangoAttrIterator and free all associated memory.
     */
    destroy(): void
    /**
     * Find the current attribute of a particular type at the iterator
     * location. When multiple attributes of the same type overlap,
     * the attribute whose range starts closest to the current location
     * is used.
     * @param type the type of attribute to find.
     */
    get(type: AttrType): Attribute | null
    /**
     * Gets a list of all attributes at the current position of the
     * iterator.
     */
    get_attrs(): Attribute[]
    /**
     * Get the font and other attributes at the current iterator position.
     * @param desc a #PangoFontDescription to fill in with the current values.        The family name in this structure will be set using        pango_font_description_set_family_static() using values from        an attribute in the #PangoAttrList associated with the iterator,        so if you plan to keep it around, you must call:        <literal>pango_font_description_set_family (desc, pango_font_description_get_family (desc))</literal>.
     * @param language if non-%NULL, location to store language tag for item, or %NULL            if none is found.
     * @param extra_attrs if non-%NULL,           location in which to store a list of non-font           attributes at the the current position; only the highest priority           value of each attribute will be added to this list. In order           to free this value, you must call pango_attribute_destroy() on           each member.
     */
    get_font(desc: FontDescription, language: Language | null, extra_attrs: Attribute[] | null): void
    /**
     * Advance the iterator until the next change of style.
     */
    next(): boolean
    /**
     * Get the range of the current segment. Note that the
     * stored return values are signed, not unsigned like
     * the values in #PangoAttribute. To deal with this API
     * oversight, stored return values that wouldn't fit into
     * a signed integer are clamped to %G_MAXINT.
     */
    range(): [ /* start */ number, /* end */ number ]
    static name: string
}
/**
 * The #PangoAttrLanguage structure is used to represent attributes that
 * are languages.
 */
export class AttrLanguage {
    /* Own fields of Pango-1.0.Pango.AttrLanguage */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the #PangoLanguage which is the value of the attribute
     */
    value: Language
    static name: string
}
/**
 * The #PangoAttrList structure represents a list of attributes
 * that apply to a section of text. The attributes are, in general,
 * allowed to overlap in an arbitrary fashion, however, if the
 * attributes are manipulated only through pango_attr_list_change(),
 * the overlap between properties will meet stricter criteria.
 * 
 * Since the #PangoAttrList structure is stored as a linear list,
 * it is not suitable for storing attributes for large amounts
 * of text. In general, you should not use a single #PangoAttrList
 * for more than one paragraph of text.
 */
export class AttrList {
    /* Owm methods of Pango-1.0.Pango.AttrList */
    /**
     * Insert the given attribute into the #PangoAttrList. It will
     * replace any attributes of the same type on that segment
     * and be merged with any adjoining attributes that are identical.
     * 
     * This function is slower than pango_attr_list_insert() for
     * creating a attribute list in order (potentially much slower
     * for large lists). However, pango_attr_list_insert() is not
     * suitable for continually changing a set of attributes
     * since it never removes or combines existing attributes.
     * @param attr the attribute to insert. Ownership of this        value is assumed by the list.
     */
    change(attr: Attribute): void
    /**
     * Copy `list` and return an identical new list.
     */
    copy(): AttrList | null
    /**
     * Given a #PangoAttrList and callback function, removes any elements
     * of `list` for which `func` returns %TRUE and inserts them into
     * a new list.
     * @param func callback function; returns %TRUE        if an attribute should be filtered out.
     */
    filter(func: AttrFilterFunc): AttrList | null
    /**
     * Gets a list of all attributes in `list`.
     */
    get_attributes(): Attribute[]
    /**
     * Create a iterator initialized to the beginning of the list.
     * `list` must not be modified until this iterator is freed.
     */
    get_iterator(): AttrIterator
    /**
     * Insert the given attribute into the #PangoAttrList. It will
     * be inserted after all other attributes with a matching
     * `start_index`.
     * @param attr the attribute to insert. Ownership of this        value is assumed by the list.
     */
    insert(attr: Attribute): void
    /**
     * Insert the given attribute into the #PangoAttrList. It will
     * be inserted before all other attributes with a matching
     * `start_index`.
     * @param attr the attribute to insert. Ownership of this        value is assumed by the list.
     */
    insert_before(attr: Attribute): void
    /**
     * Increase the reference count of the given attribute list by one.
     */
    ref(): AttrList
    /**
     * This function opens up a hole in `list,` fills it in with attributes from
     * the left, and then merges `other` on top of the hole.
     * 
     * This operation is equivalent to stretching every attribute
     * that applies at position `pos` in `list` by an amount `len,`
     * and then calling pango_attr_list_change() with a copy
     * of each attribute in `other` in sequence (offset in position by `pos)`.
     * 
     * This operation proves useful for, for instance, inserting
     * a pre-edit string in the middle of an edit buffer.
     * @param other another #PangoAttrList
     * @param pos the position in `list` at which to insert `other`
     * @param len the length of the spliced segment. (Note that this       must be specified since the attributes in `other`       may only be present at some subsection of this range)
     */
    splice(other: AttrList, pos: number, len: number): void
    /**
     * Decrease the reference count of the given attribute list by one.
     * If the result is zero, free the attribute list and the attributes
     * it contains.
     */
    unref(): void
    /**
     * Update indices of attributes in `list` for
     * a change in the text they refer to.
     * 
     * The change that this function applies is
     * removing `remove` bytes at position `pos`
     * and inserting `add` bytes instead.
     * 
     * Attributes that fall entirely in the
     * (`pos,` `pos` + `remove)` range are removed.
     * 
     * Attributes that start or end inside the
     * (`pos,` `pos` + `remove)` range are shortened to
     * reflect the removal.
     * 
     * Attributes start and end positions are updated
     * if they are behind `pos` + `remove`.
     * @param pos the position of the change
     * @param remove the number of removed bytes
     * @param add the number of added bytes
     */
    update(pos: number, remove: number, add: number): void
    static name: string
    static new(): AttrList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AttrList
}
/**
 * The #PangoAttrShape structure is used to represent attributes which
 * impose shape restrictions.
 */
export class AttrShape {
    /* Own fields of Pango-1.0.Pango.AttrShape */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the ink rectangle to restrict to
     */
    ink_rect: Rectangle
    /**
     * the logical rectangle to restrict to
     */
    logical_rect: Rectangle
    /**
     * user data set (see pango_attr_shape_new_with_data())
     */
    data: object
    /**
     * copy function for the user data
     */
    copy_func: AttrDataCopyFunc
    /**
     * destroy function for the user data
     */
    destroy_func: GLib.DestroyNotify
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Like pango_attr_shape_new(), but a user data pointer is also
     * provided; this pointer can be accessed when later
     * rendering the glyph.
     * @param ink_rect ink rectangle to assign to each character
     * @param logical_rect logical rectangle to assign to each character
     * @param data user data pointer
     * @param copy_func function to copy `data` when the                attribute is copied. If %NULL, `data` is simply                copied as a pointer.
     */
    static new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: object | null, copy_func: AttrDataCopyFunc | null): Attribute
}
/**
 * The #PangoAttrSize structure is used to represent attributes which
 * set font size.
 */
export class AttrSize {
    /* Own fields of Pango-1.0.Pango.AttrSize */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * size of font, in units of 1/%PANGO_SCALE of a point (for
     * %PANGO_ATTR_SIZE) or of a device uni (for %PANGO_ATTR_ABSOLUTE_SIZE)
     */
    size: number
    /**
     * whether the font size is in device units or points.
     * This field is only present for compatibility with Pango-1.8.0
     * (%PANGO_ATTR_ABSOLUTE_SIZE was added in 1.8.1); and always will
     * be %FALSE for %PANGO_ATTR_SIZE and %TRUE for %PANGO_ATTR_ABSOLUTE_SIZE.
     */
    absolute: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Create a new font-size attribute in device units.
     * @param size the font size, in %PANGO_SCALEths of a device unit.
     */
    static new_absolute(size: number): Attribute
}
/**
 * The #PangoAttrString structure is used to represent attributes with
 * a string value.
 */
export class AttrString {
    /* Own fields of Pango-1.0.Pango.AttrString */
    /**
     * the common portion of the attribute
     */
    attr: Attribute
    /**
     * the string which is the value of the attribute
     */
    value: string
    static name: string
}
/**
 * The #PangoAttribute structure represents the common portions of all
 * attributes. Particular types of attributes include this structure
 * as their initial portion. The common portion of the attribute holds
 * the range to which the value in the type-specific part of the attribute
 * applies and should be initialized using pango_attribute_init().
 * By default an attribute will have an all-inclusive range of [0,%G_MAXUINT].
 */
export class Attribute {
    /* Own fields of Pango-1.0.Pango.Attribute */
    /**
     * the class structure holding information about the type of the attribute
     */
    klass: AttrClass
    /**
     * the start index of the range (in bytes).
     */
    start_index: number
    /**
     * end index of the range (in bytes). The character at this index
     * is not included in the range.
     */
    end_index: number
    /* Owm methods of Pango-1.0.Pango.Attribute */
    /**
     * Make a copy of an attribute.
     */
    copy(): Attribute
    /**
     * Destroy a #PangoAttribute and free all associated memory.
     */
    destroy(): void
    /**
     * Compare two attributes for equality. This compares only the
     * actual value of the two attributes and not the ranges that the
     * attributes apply to.
     * @param attr2 another #PangoAttribute
     */
    equal(attr2: Attribute): boolean
    /**
     * Initializes `attr'`s klass to `klass,`
     * it's start_index to %PANGO_ATTR_INDEX_FROM_TEXT_BEGINNING
     * and end_index to %PANGO_ATTR_INDEX_TO_TEXT_END
     * such that the attribute applies
     * to the entire text by default.
     * @param klass a #PangoAttrClass
     */
    init(klass: AttrClass): void
    static name: string
}
/**
 * The #PangoColor structure is used to
 * represent a color in an uncalibrated RGB color-space.
 */
export class Color {
    /* Own fields of Pango-1.0.Pango.Color */
    /**
     * value of red component
     */
    red: number
    /**
     * value of green component
     */
    green: number
    /**
     * value of blue component
     */
    blue: number
    /* Owm methods of Pango-1.0.Pango.Color */
    /**
     * Creates a copy of `src,` which should be freed with
     * pango_color_free(). Primarily used by language bindings,
     * not that useful otherwise (since colors can just be copied
     * by assignment in C).
     */
    copy(): Color | null
    /**
     * Frees a color allocated by pango_color_copy().
     */
    free(): void
    /**
     * Fill in the fields of a color from a string specification. The
     * string can either one of a large set of standard names. (Taken
     * from the CSS <ulink url="http://dev.w3.org/csswg/css-color/#named-colors">specification</ulink>), or it can be a hexadecimal
     * value in the
     * form '&num;rgb' '&num;rrggbb' '&num;rrrgggbbb' or '&num;rrrrggggbbbb' where
     * 'r', 'g' and 'b' are hex digits of the red, green, and blue
     * components of the color, respectively. (White in the four
     * forms is '&num;fff' '&num;ffffff' '&num;fffffffff' and '&num;ffffffffffff')
     * @param spec a string specifying the new color
     */
    parse(spec: string): boolean
    /**
     * Returns a textual specification of `color` in the hexadecimal form
     * <literal>&num;rrrrggggbbbb</literal>, where <literal>r</literal>,
     * <literal>g</literal> and <literal>b</literal> are hex digits representing
     * the red, green, and blue components respectively.
     */
    to_string(): string
    static name: string
}
export abstract class ContextClass {
    static name: string
}
/**
 * Class structure for #PangoEngine
 */
export abstract class EngineClass {
    static name: string
}
/**
 * The #PangoEngineInfo structure contains information about a particular
 * engine. It contains the following fields:
 */
export class EngineInfo {
    /* Own fields of Pango-1.0.Pango.EngineInfo */
    /**
     * a unique string ID for the engine.
     */
    id: string
    /**
     * a string identifying the engine type.
     */
    engine_type: string
    /**
     * a string identifying the render type.
     */
    render_type: string
    /**
     * array of scripts this engine supports.
     */
    scripts: EngineScriptInfo
    /**
     * number of items in `scripts`.
     */
    n_scripts: number
    static name: string
}
/**
 * Class structure for #PangoEngineLang
 */
export abstract class EngineLangClass {
    /* Own fields of Pango-1.0.Pango.EngineLangClass */
    script_break: (engine: EngineLang, text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number) => void
    static name: string
}
/**
 * The #PangoEngineScriptInfo structure contains
 * information about how the shaper covers a particular script.
 */
export class EngineScriptInfo {
    /* Own fields of Pango-1.0.Pango.EngineScriptInfo */
    /**
     * a #PangoScript. The value %PANGO_SCRIPT_COMMON has
     * the special meaning here of "all scripts"
     */
    script: Script
    /**
     * a semicolon separated list of languages that this
     * engine handles for this script. This may be empty,
     * in which case the engine is saying that it is a
     * fallback choice for all languages for this range,
     * but should not be used if another engine
     * indicates that it is specific for the language for
     * a given code point. An entry in this list of "*"
     * indicates that this engine is specific to all
     * languages for this range.
     */
    langs: string
    static name: string
}
/**
 * Class structure for #PangoEngineShape
 */
export abstract class EngineShapeClass {
    /* Own fields of Pango-1.0.Pango.EngineShapeClass */
    script_shape: (engine: EngineShape, font: Font, item_text: string, item_length: number, analysis: Analysis, glyphs: GlyphString, paragraph_text: string, paragraph_length: number) => void
    covers: (engine: EngineShape, font: Font, language: Language, wc: string) => CoverageLevel
    static name: string
}
export abstract class FontClass {
    /* Own fields of Pango-1.0.Pango.FontClass */
    parent_class: GObject.ObjectClass
    describe: (font: Font) => FontDescription
    get_coverage: (font: Font, language: Language) => Coverage
    get_glyph_extents: (font: Font | null, glyph: Glyph) => [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    get_metrics: (font: Font | null, language: Language | null) => FontMetrics
    get_font_map: (font: Font | null) => FontMap | null
    describe_absolute: (font: Font) => FontDescription
    static name: string
}
/**
 * The #PangoFontDescription structure represents the description
 * of an ideal font. These structures are used both to list
 * what fonts are available on the system and also for specifying
 * the characteristics of a font to load.
 */
export class FontDescription {
    /* Owm methods of Pango-1.0.Pango.FontDescription */
    /**
     * Determines if the style attributes of `new_match` are a closer match
     * for `desc` than those of `old_match` are, or if `old_match` is %NULL,
     * determines if `new_match` is a match at all.
     * Approximate matching is done for
     * weight and style; other style attributes must match exactly.
     * Style attributes are all attributes other than family and size-related
     * attributes.  Approximate matching for style considers PANGO_STYLE_OBLIQUE
     * and PANGO_STYLE_ITALIC as matches, but not as good a match as when the
     * styles are equal.
     * 
     * Note that `old_match` must match `desc`.
     * @param old_match a #PangoFontDescription, or %NULL
     * @param new_match a #PangoFontDescription
     */
    better_match(old_match: FontDescription | null, new_match: FontDescription): boolean
    /**
     * Make a copy of a #PangoFontDescription.
     */
    copy(): FontDescription | null
    /**
     * Like pango_font_description_copy(), but only a shallow copy is made
     * of the family name and other allocated fields. The result can only
     * be used until `desc` is modified or freed. This is meant to be used
     * when the copy is only needed temporarily.
     */
    copy_static(): FontDescription | null
    /**
     * Compares two font descriptions for equality. Two font descriptions
     * are considered equal if the fonts they describe are provably identical.
     * This means that their masks do not have to match, as long as other fields
     * are all the same. (Two font descriptions may result in identical fonts
     * being loaded, but still compare %FALSE.)
     * @param desc2 another #PangoFontDescription
     */
    equal(desc2: FontDescription): boolean
    /**
     * Frees a font description.
     */
    free(): void
    /**
     * Gets the family name field of a font description. See
     * pango_font_description_set_family().
     */
    get_family(): string | null
    /**
     * Gets the gravity field of a font description. See
     * pango_font_description_set_gravity().
     */
    get_gravity(): Gravity
    /**
     * Determines which fields in a font description have been set.
     */
    get_set_fields(): FontMask
    /**
     * Gets the size field of a font description.
     * See pango_font_description_set_size().
     */
    get_size(): number
    /**
     * Determines whether the size of the font is in points (not absolute) or device units (absolute).
     * See pango_font_description_set_size() and pango_font_description_set_absolute_size().
     */
    get_size_is_absolute(): boolean
    /**
     * Gets the stretch field of a font description.
     * See pango_font_description_set_stretch().
     */
    get_stretch(): Stretch
    /**
     * Gets the style field of a #PangoFontDescription. See
     * pango_font_description_set_style().
     */
    get_style(): Style
    /**
     * Gets the variant field of a #PangoFontDescription. See
     * pango_font_description_set_variant().
     */
    get_variant(): Variant
    /**
     * Gets the variations field of a font description. See
     * pango_font_description_set_variations().
     */
    get_variations(): string | null
    /**
     * Gets the weight field of a font description. See
     * pango_font_description_set_weight().
     */
    get_weight(): Weight
    /**
     * Computes a hash of a #PangoFontDescription structure suitable
     * to be used, for example, as an argument to g_hash_table_new().
     * The hash value is independent of `desc->`mask.
     */
    hash(): number
    /**
     * Merges the fields that are set in `desc_to_merge` into the fields in
     * `desc`.  If `replace_existing` is %FALSE, only fields in `desc` that
     * are not already set are affected. If %TRUE, then fields that are
     * already set will be replaced as well.
     * 
     * If `desc_to_merge` is %NULL, this function performs nothing.
     * @param desc_to_merge the #PangoFontDescription to merge from, or %NULL
     * @param replace_existing if %TRUE, replace fields in `desc` with the   corresponding values from `desc_to_merge,` even if they   are already exist.
     */
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void
    /**
     * Like pango_font_description_merge(), but only a shallow copy is made
     * of the family name and other allocated fields. `desc` can only be
     * used until `desc_to_merge` is modified or freed. This is meant
     * to be used when the merged font description is only needed temporarily.
     * @param desc_to_merge the #PangoFontDescription to merge from
     * @param replace_existing if %TRUE, replace fields in `desc` with the   corresponding values from `desc_to_merge,` even if they   are already exist.
     */
    merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void
    /**
     * Sets the size field of a font description, in device units. This is mutually
     * exclusive with pango_font_description_set_size() which sets the font size
     * in points.
     * @param size the new size, in Pango units. There are %PANGO_SCALE Pango units in one   device unit. For an output backend where a device unit is a pixel, a `size`   value of 10 * PANGO_SCALE gives a 10 pixel font.
     */
    set_absolute_size(size: number): void
    /**
     * Sets the family name field of a font description. The family
     * name represents a family of related font styles, and will
     * resolve to a particular #PangoFontFamily. In some uses of
     * #PangoFontDescription, it is also possible to use a comma
     * separated list of family names for this field.
     * @param family a string representing the family name.
     */
    set_family(family: string): void
    /**
     * Like pango_font_description_set_family(), except that no
     * copy of `family` is made. The caller must make sure that the
     * string passed in stays around until `desc` has been freed
     * or the name is set again. This function can be used if
     * `family` is a static string such as a C string literal, or
     * if `desc` is only needed temporarily.
     * @param family a string representing the family name.
     */
    set_family_static(family: string): void
    /**
     * Sets the gravity field of a font description. The gravity field
     * specifies how the glyphs should be rotated.  If `gravity` is
     * %PANGO_GRAVITY_AUTO, this actually unsets the gravity mask on
     * the font description.
     * 
     * This function is seldom useful to the user.  Gravity should normally
     * be set on a #PangoContext.
     * @param gravity the gravity for the font description.
     */
    set_gravity(gravity: Gravity): void
    /**
     * Sets the size field of a font description in fractional points. This is mutually
     * exclusive with pango_font_description_set_absolute_size().
     * @param size the size of the font in points, scaled by PANGO_SCALE. (That is,        a `size` value of 10 * PANGO_SCALE is a 10 point font. The conversion        factor between points and device units depends on system configuration        and the output device. For screen display, a logical DPI of 96 is        common, in which case a 10 point font corresponds to a 10 * (96 / 72) = 13.3        pixel font. Use pango_font_description_set_absolute_size() if you need        a particular size in device units.
     */
    set_size(size: number): void
    /**
     * Sets the stretch field of a font description. The stretch field
     * specifies how narrow or wide the font should be.
     * @param stretch the stretch for the font description
     */
    set_stretch(stretch: Stretch): void
    /**
     * Sets the style field of a #PangoFontDescription. The
     * #PangoStyle enumeration describes whether the font is slanted and
     * the manner in which it is slanted; it can be either
     * #PANGO_STYLE_NORMAL, #PANGO_STYLE_ITALIC, or #PANGO_STYLE_OBLIQUE.
     * Most fonts will either have a italic style or an oblique
     * style, but not both, and font matching in Pango will
     * match italic specifications with oblique fonts and vice-versa
     * if an exact match is not found.
     * @param style the style for the font description
     */
    set_style(style: Style): void
    /**
     * Sets the variant field of a font description. The #PangoVariant
     * can either be %PANGO_VARIANT_NORMAL or %PANGO_VARIANT_SMALL_CAPS.
     * @param variant the variant type for the font description.
     */
    set_variant(variant: Variant): void
    /**
     * Sets the variations field of a font description. OpenType
     * font variations allow to select a font instance by specifying
     * values for a number of axes, such as width or weight.
     * 
     * The format of the variations string is AXIS1=VALUE,AXIS2=VALUE...,
     * with each AXIS a 4 character tag that identifies a font axis,
     * and each VALUE a floating point number. Unknown axes are ignored,
     * and values are clamped to their allowed range.
     * 
     * Pango does not currently have a way to find supported axes of
     * a font. Both harfbuzz or freetype have API for this.
     * @param variations a string representing the variations
     */
    set_variations(variations: string): void
    /**
     * Like pango_font_description_set_variations(), except that no
     * copy of `variations` is made. The caller must make sure that the
     * string passed in stays around until `desc` has been freed
     * or the name is set again. This function can be used if
     * `variations` is a static string such as a C string literal, or
     * if `desc` is only needed temporarily.
     * @param variations a string representing the variations
     */
    set_variations_static(variations: string): void
    /**
     * Sets the weight field of a font description. The weight field
     * specifies how bold or light the font should be. In addition
     * to the values of the #PangoWeight enumeration, other intermediate
     * numeric values are possible.
     * @param weight the weight for the font description.
     */
    set_weight(weight: Weight): void
    /**
     * Creates a filename representation of a font description. The
     * filename is identical to the result from calling
     * pango_font_description_to_string(), but with underscores instead of
     * characters that are untypical in filenames, and in lower case only.
     */
    to_filename(): string
    /**
     * Creates a string representation of a font description. See
     * pango_font_description_from_string() for a description of the
     * format of the string representation. The family list in the
     * string description will only have a terminating comma if the
     * last word of the list is a valid style option.
     */
    to_string(): string
    /**
     * Unsets some of the fields in a #PangoFontDescription.  The unset
     * fields will get back to their default values.
     * @param to_unset bitmask of fields in the `desc` to unset.
     */
    unset_fields(to_unset: FontMask): void
    static name: string
    static new(): FontDescription
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FontDescription
    /**
     * Creates a new font description from a string representation in the
     * form
     * 
     * "\[FAMILY-LIST] \[STYLE-OPTIONS] \[SIZE] \[VARIATIONS]",
     * 
     * where FAMILY-LIST is a comma-separated list of families optionally
     * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
     * of words where each word describes one of style, variant, weight,
     * stretch, or gravity, and SIZE is a decimal number (size in points)
     * or optionally followed by the unit modifier "px" for absolute size.
     * VARIATIONS is a comma-separated list of font variation
     * specifications of the form "\`axis=`value" (the = sign is optional).
     * 
     * The following words are understood as styles:
     * "Normal", "Roman", "Oblique", "Italic".
     * 
     * The following words are understood as variants:
     * "Small-Caps".
     * 
     * The following words are understood as weights:
     * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
     * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
     * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
     * "Extra-Black".
     * 
     * The following words are understood as stretch values:
     * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
     * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
     * 
     * The following words are understood as gravity values:
     * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
     * "East", "Rotated-Right", "West".
     * 
     * Any one of the options may be absent. If FAMILY-LIST is absent, then
     * the family_name field of the resulting font description will be
     * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
     * options will be set to the default values. If SIZE is missing, the
     * size in the resulting font description will be set to 0.
     * 
     * A typical example:
     * 
     * "Cantarell Italic Light 15 \`wght=`200"
     * @param str string representation of a font description.
     */
    static from_string(str: string): FontDescription
}
export abstract class FontFaceClass {
    /* Own fields of Pango-1.0.Pango.FontFaceClass */
    parent_class: GObject.ObjectClass
    get_face_name: (face: FontFace) => string
    describe: (face: FontFace) => FontDescription
    list_sizes: (face: FontFace) => /* sizes */ number[] | null
    is_synthesized: (face: FontFace) => boolean
    static name: string
}
export abstract class FontFamilyClass {
    /* Own fields of Pango-1.0.Pango.FontFamilyClass */
    parent_class: GObject.ObjectClass
    list_faces: (family: FontFamily) => /* faces */ FontFace[]
    get_name: (family: FontFamily) => string
    is_monospace: (family: FontFamily) => boolean
    is_variable: (family: FontFamily) => boolean
    static name: string
}
/**
 * The #PangoFontMapClass structure holds the virtual functions for
 * a particular #PangoFontMap implementation.
 */
export abstract class FontMapClass {
    /* Own fields of Pango-1.0.Pango.FontMapClass */
    /**
     * parent #GObjectClass.
     */
    parent_class: GObject.ObjectClass
    load_font: (fontmap: FontMap, context: Context, desc: FontDescription) => Font | null
    list_families: (fontmap: FontMap) => /* families */ FontFamily[]
    load_fontset: (fontmap: FontMap, context: Context, desc: FontDescription, language: Language) => Fontset | null
    /**
     * the type of rendering-system-dependent engines that
     * can handle fonts of this fonts loaded with this fontmap.
     */
    shape_engine_type: string
    get_serial: (fontmap: FontMap) => number
    changed: (fontmap: FontMap) => void
    static name: string
}
/**
 * A #PangoFontMetrics structure holds the overall metric information
 * for a font (possibly restricted to a script). The fields of this
 * structure are private to implementations of a font backend. See
 * the documentation of the corresponding getters for documentation
 * of their meaning.
 */
export class FontMetrics {
    /* Owm methods of Pango-1.0.Pango.FontMetrics */
    /**
     * Gets the approximate character width for a font metrics structure.
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual characters in
     * text will be wider and narrower than this.
     */
    get_approximate_char_width(): number
    /**
     * Gets the approximate digit width for a font metrics structure.
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual digits in
     * text can be wider or narrower than this, though this value
     * is generally somewhat more accurate than the result of
     * pango_font_metrics_get_approximate_char_width() for digits.
     */
    get_approximate_digit_width(): number
    /**
     * Gets the ascent from a font metrics structure. The ascent is
     * the distance from the baseline to the logical top of a line
     * of text. (The logical top may be above or below the top of the
     * actual drawn ink. It is necessary to lay out the text to figure
     * where the ink will be.)
     */
    get_ascent(): number
    /**
     * Gets the descent from a font metrics structure. The descent is
     * the distance from the baseline to the logical bottom of a line
     * of text. (The logical bottom may be above or below the bottom of the
     * actual drawn ink. It is necessary to lay out the text to figure
     * where the ink will be.)
     */
    get_descent(): number
    /**
     * Gets the line height from a font metrics structure. The
     * line height is the distance between successive baselines
     * in wrapped text.
     * 
     * If the line height is not available, 0 is returned.
     */
    get_height(): number
    /**
     * Gets the suggested position to draw the strikethrough.
     * The value returned is the distance <emphasis>above</emphasis> the
     * baseline of the top of the strikethrough.
     */
    get_strikethrough_position(): number
    /**
     * Gets the suggested thickness to draw for the strikethrough.
     */
    get_strikethrough_thickness(): number
    /**
     * Gets the suggested position to draw the underline.
     * The value returned is the distance <emphasis>above</emphasis> the
     * baseline of the top of the underline. Since most fonts have
     * underline positions beneath the baseline, this value is typically
     * negative.
     */
    get_underline_position(): number
    /**
     * Gets the suggested thickness to draw for the underline.
     */
    get_underline_thickness(): number
    /**
     * Increase the reference count of a font metrics structure by one.
     */
    ref(): FontMetrics | null
    /**
     * Decrease the reference count of a font metrics structure by one. If
     * the result is zero, frees the structure and any associated
     * memory.
     */
    unref(): void
    static name: string
}
/**
 * The #PangoFontsetClass structure holds the virtual functions for
 * a particular #PangoFontset implementation.
 */
export abstract class FontsetClass {
    /* Own fields of Pango-1.0.Pango.FontsetClass */
    /**
     * parent #GObjectClass.
     */
    parent_class: GObject.ObjectClass
    get_font: (fontset: Fontset, wc: number) => Font
    get_metrics: (fontset: Fontset) => FontMetrics
    get_language: (fontset: Fontset) => Language
    foreach: (fontset: Fontset, func: FontsetForeachFunc) => void
    static name: string
}
export abstract class FontsetSimpleClass {
    static name: string
}
/**
 * The #PangoGlyphGeometry structure contains width and positioning
 * information for a single glyph.
 */
export class GlyphGeometry {
    /* Own fields of Pango-1.0.Pango.GlyphGeometry */
    /**
     * the logical width to use for the the character.
     */
    width: GlyphUnit
    /**
     * horizontal offset from nominal character position.
     */
    x_offset: GlyphUnit
    /**
     * vertical offset from nominal character position.
     */
    y_offset: GlyphUnit
    static name: string
}
/**
 * The #PangoGlyphInfo structure represents a single glyph together with
 * positioning information and visual attributes.
 * It contains the following fields.
 */
export class GlyphInfo {
    /* Own fields of Pango-1.0.Pango.GlyphInfo */
    /**
     * the glyph itself.
     */
    glyph: Glyph
    /**
     * the positional information about the glyph.
     */
    geometry: GlyphGeometry
    /**
     * the visual attributes of the glyph.
     */
    attr: GlyphVisAttr
    static name: string
}
/**
 * A #PangoGlyphItem is a pair of a #PangoItem and the glyphs
 * resulting from shaping the text corresponding to an item.
 * As an example of the usage of #PangoGlyphItem, the results
 * of shaping text with #PangoLayout is a list of #PangoLayoutLine,
 * each of which contains a list of #PangoGlyphItem.
 */
export class GlyphItem {
    /* Own fields of Pango-1.0.Pango.GlyphItem */
    /**
     * corresponding #PangoItem.
     */
    item: Item
    /**
     * corresponding #PangoGlyphString.
     */
    glyphs: GlyphString
    /* Owm methods of Pango-1.0.Pango.GlyphItem */
    /**
     * Splits a shaped item (PangoGlyphItem) into multiple items based
     * on an attribute list. The idea is that if you have attributes
     * that don't affect shaping, such as color or underline, to avoid
     * affecting shaping, you filter them out (pango_attr_list_filter()),
     * apply the shaping process and then reapply them to the result using
     * this function.
     * 
     * All attributes that start or end inside a cluster are applied
     * to that cluster; for instance, if half of a cluster is underlined
     * and the other-half strikethrough, then the cluster will end
     * up with both underline and strikethrough attributes. In these
     * cases, it may happen that item->extra_attrs for some of the
     * result items can have multiple attributes of the same type.
     * 
     * This function takes ownership of `glyph_item;` it will be reused
     * as one of the elements in the list.
     * @param text text that `list` applies to
     * @param list a #PangoAttrList
     */
    apply_attrs(text: string, list: AttrList): GlyphItem[]
    /**
     * Make a deep copy of an existing #PangoGlyphItem structure.
     */
    copy(): GlyphItem | null
    /**
     * Frees a #PangoGlyphItem and resources to which it points.
     */
    free(): void
    /**
     * Given a #PangoGlyphItem and the corresponding
     * text, determine the screen width corresponding to each character. When
     * multiple characters compose a single cluster, the width of the entire
     * cluster is divided equally among the characters.
     * 
     * See also pango_glyph_string_get_logical_widths().
     * @param text text that `glyph_item` corresponds to   (glyph_item->item->offset is an offset from the    start of `text)`
     * @param logical_widths an array whose length is the number of                  characters in glyph_item (equal to                  glyph_item->item->num_chars) to be filled in with                  the resulting character widths.
     */
    get_logical_widths(text: string, logical_widths: number[]): void
    /**
     * Adds spacing between the graphemes of `glyph_item` to
     * give the effect of typographic letter spacing.
     * @param text text that `glyph_item` corresponds to   (glyph_item->item->offset is an offset from the    start of `text)`
     * @param log_attrs logical attributes for the item   (the first logical attribute refers to the position   before the first character in the item)
     * @param letter_spacing amount of letter spacing to add   in Pango units. May be negative, though too large   negative values will give ugly results.
     */
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`. You can think of `split_index` as the length of
     * the returned item. `split_index` may not be 0, and it may not be
     * greater than or equal to the length of `orig` (that is, there must
     * be at least one byte assigned to each item, you can't create a
     * zero-length item).
     * 
     * This function is similar in function to pango_item_split() (and uses
     * it internally.)
     * @param text text to which positions in `orig` apply
     * @param split_index byte index of position to split item, relative to the start of the item
     */
    split(text: string, split_index: number): GlyphItem
    static name: string
}
/**
 * A #PangoGlyphItemIter is an iterator over the clusters in a
 * #PangoGlyphItem.  The <firstterm>forward direction</firstterm> of the
 * iterator is the logical direction of text.  That is, with increasing
 * `start_index` and `start_char` values.  If `glyph_item` is right-to-left
 * (that is, if <literal>`glyph_item->`item->analysis.level</literal> is odd),
 * then `start_glyph` decreases as the iterator moves forward.  Moreover,
 * in right-to-left cases, `start_glyph` is greater than `end_glyph`.
 * 
 * An iterator should be initialized using either of
 * pango_glyph_item_iter_init_start() and
 * pango_glyph_item_iter_init_end(), for forward and backward iteration
 * respectively, and walked over using any desired mixture of
 * pango_glyph_item_iter_next_cluster() and
 * pango_glyph_item_iter_prev_cluster().  A common idiom for doing a
 * forward iteration over the clusters is:
 * <programlisting>
 * PangoGlyphItemIter cluster_iter;
 * gboolean have_cluster;
 * 
 * for (have_cluster = pango_glyph_item_iter_init_start (&amp;cluster_iter,
 *                                                       glyph_item, text);
 *      have_cluster;
 *      have_cluster = pango_glyph_item_iter_next_cluster (&amp;cluster_iter))
 * {
 *   ...
 * }
 * </programlisting>
 * 
 * Note that `text` is the start of the text for layout, which is then
 * indexed by <literal>`glyph_item->`item->offset</literal> to get to the
 * text of `glyph_item`.  The `start_index` and `end_index` values can directly
 * index into `text`.  The `start_glyph,` `end_glyph,` `start_char,` and `end_char`
 * values however are zero-based for the `glyph_item`.  For each cluster, the
 * item pointed at by the start variables is included in the cluster while
 * the one pointed at by end variables is not.
 * 
 * None of the members of a #PangoGlyphItemIter should be modified manually.
 */
export class GlyphItemIter {
    /* Own fields of Pango-1.0.Pango.GlyphItemIter */
    glyph_item: GlyphItem
    text: string
    start_glyph: number
    start_index: number
    start_char: number
    end_glyph: number
    end_index: number
    end_char: number
    /* Owm methods of Pango-1.0.Pango.GlyphItemIter */
    /**
     * Make a shallow copy of an existing #PangoGlyphItemIter structure.
     */
    copy(): GlyphItemIter | null
    /**
     * Frees a #PangoGlyphItemIter created by pango_glyph_item_iter_copy().
     */
    free(): void
    /**
     * Initializes a #PangoGlyphItemIter structure to point to the
     * last cluster in a glyph item.
     * See #PangoGlyphItemIter for details of cluster orders.
     * @param glyph_item the glyph item to iterate over
     * @param text text corresponding to the glyph item
     */
    init_end(glyph_item: GlyphItem, text: string): boolean
    /**
     * Initializes a #PangoGlyphItemIter structure to point to the
     * first cluster in a glyph item.
     * See #PangoGlyphItemIter for details of cluster orders.
     * @param glyph_item the glyph item to iterate over
     * @param text text corresponding to the glyph item
     */
    init_start(glyph_item: GlyphItem, text: string): boolean
    /**
     * Advances the iterator to the next cluster in the glyph item.
     * See #PangoGlyphItemIter for details of cluster orders.
     */
    next_cluster(): boolean
    /**
     * Moves the iterator to the preceding cluster in the glyph item.
     * See #PangoGlyphItemIter for details of cluster orders.
     */
    prev_cluster(): boolean
    static name: string
}
/**
 * The #PangoGlyphString structure is used to store strings
 * of glyphs with geometry and visual attribute information.
 * The storage for the glyph information is owned
 * by the structure which simplifies memory management.
 */
export class GlyphString {
    /* Own fields of Pango-1.0.Pango.GlyphString */
    /**
     * number of the glyphs in this glyph string.
     */
    num_glyphs: number
    /**
     * array of glyph information
     *          for the glyph string.
     */
    glyphs: GlyphInfo[]
    /**
     * logical cluster info, indexed by the byte index
     *                within the text corresponding to the glyph string.
     */
    log_clusters: number
    /* Owm methods of Pango-1.0.Pango.GlyphString */
    /**
     * Copy a glyph string and associated storage.
     */
    copy(): GlyphString | null
    /**
     * Compute the logical and ink extents of a glyph string. See the documentation
     * for pango_font_get_glyph_extents() for details about the interpretation
     * of the rectangles.
     * 
     * Examples of logical (red) and ink (green) rects:
     * 
     * ![](rects1.png) ![](rects2.png)
     * @param font a #PangoFont
     */
    extents(font: Font): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Computes the extents of a sub-portion of a glyph string. The extents are
     * relative to the start of the glyph string range (the origin of their
     * coordinate system is at the start of the range, not at the start of the entire
     * glyph string).
     * @param start start index
     * @param end end index (the range is the set of bytes with 	      indices such that start <= index < end)
     * @param font a #PangoFont
     */
    extents_range(start: number, end: number, font: Font): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Free a glyph string and associated storage.
     */
    free(): void
    /**
     * Given a #PangoGlyphString resulting from pango_shape() and the corresponding
     * text, determine the screen width corresponding to each character. When
     * multiple characters compose a single cluster, the width of the entire
     * cluster is divided equally among the characters.
     * 
     * See also pango_glyph_item_get_logical_widths().
     * @param text the text corresponding to the glyphs
     * @param length the length of `text,` in bytes
     * @param embedding_level the embedding level of the string
     * @param logical_widths an array whose length is the number of                  characters in text (equal to g_utf8_strlen (text,                  length) unless text has NUL bytes) to be filled in                  with the resulting character widths.
     */
    get_logical_widths(text: string, length: number, embedding_level: number, logical_widths: number[]): void
    /**
     * Computes the logical width of the glyph string as can also be computed
     * using pango_glyph_string_extents().  However, since this only computes the
     * width, it's much faster.  This is in fact only a convenience function that
     * computes the sum of geometry.width for each glyph in the `glyphs`.
     */
    get_width(): number
    /**
     * Converts from character position to x position. (X position
     * is measured from the left edge of the run). Character positions
     * are computed by dividing up each cluster into equal portions.
     * @param text the text for the run
     * @param length the number of bytes (not characters) in `text`.
     * @param analysis the analysis information return from pango_itemize()
     * @param index_ the byte index within `text`
     * @param trailing whether we should compute the result for the beginning (%FALSE)             or end (%TRUE) of the character.
     */
    index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): /* x_pos */ number
    /**
     * Resize a glyph string to the given length.
     * @param new_len the new length of the string.
     */
    set_size(new_len: number): void
    /**
     * Convert from x offset to character position. Character positions
     * are computed by dividing up each cluster into equal portions.
     * In scripts where positioning within a cluster is not allowed
     * (such as Thai), the returned value may not be a valid cursor
     * position; the caller must combine the result with the logical
     * attributes for the text to compute the valid cursor position.
     * @param text the text for the run
     * @param length the number of bytes (not characters) in text.
     * @param analysis the analysis information return from pango_itemize()
     * @param x_pos the x offset (in Pango units)
     */
    x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [ /* index_ */ number, /* trailing */ number ]
    static name: string
    static new(): GlyphString
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GlyphString
}
/**
 * The PangoGlyphVisAttr is used to communicate information between
 * the shaping phase and the rendering phase.  More attributes may be
 * added in the future.
 */
export class GlyphVisAttr {
    /* Own fields of Pango-1.0.Pango.GlyphVisAttr */
    /**
     * set for the first logical glyph in each cluster. (Clusters
     * are stored in visual order, within the cluster, glyphs
     * are always ordered in logical order, since visual
     * order is meaningless; that is, in Arabic text, accent glyphs
     * follow the glyphs for the base character.)
     */
    is_cluster_start: number
    static name: string
}
/**
 * The #PangoIncludedModule structure for a statically linked module
 * contains the functions that would otherwise be loaded from a dynamically
 * loaded module.
 */
export class IncludedModule {
    /* Own fields of Pango-1.0.Pango.IncludedModule */
    list: (engines: EngineInfo, n_engines: number) => void
    init: (module: GObject.TypeModule) => void
    exit: () => void
    static name: string
}
/**
 * The #PangoItem structure stores information about a segment of text.
 */
export class Item {
    /* Own fields of Pango-1.0.Pango.Item */
    /**
     * byte offset of the start of this item in text.
     */
    offset: number
    /**
     * length of this item in bytes.
     */
    length: number
    /**
     * number of Unicode characters in the item.
     */
    num_chars: number
    /**
     * analysis results for the item.
     */
    analysis: Analysis
    /* Owm methods of Pango-1.0.Pango.Item */
    /**
     * Add attributes to a PangoItem. The idea is that you have
     * attributes that don't affect itemization, such as font features,
     * so you filter them out using pango_attr_list_filter(), itemize
     * your text, then reapply the attributes to the resulting items
     * using this function.
     * 
     * The `iter` should be positioned before the range of the item,
     * and will be advanced past it. This function is meant to be called
     * in a loop over the items resulting from itemization, while passing
     * the iter to each call.
     * @param iter a #PangoAttrIterator
     */
    apply_attrs(iter: AttrIterator): void
    /**
     * Copy an existing #PangoItem structure.
     */
    copy(): Item | null
    /**
     * Free a #PangoItem and all associated memory.
     */
    free(): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`. You can think of `split_index` as the length of
     * the returned item. `split_index` may not be 0, and it may not be
     * greater than or equal to the length of `orig` (that is, there must
     * be at least one byte assigned to each item, you can't create a
     * zero-length item). `split_offset` is the length of the first item in
     * chars, and must be provided because the text used to generate the
     * item isn't available, so pango_item_split() can't count the char
     * length of the split items itself.
     * @param split_index byte index of position to split item, relative to the start of the item
     * @param split_offset number of chars between start of `orig` and `split_index`
     */
    split(split_index: number, split_offset: number): Item
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}
/**
 * The #PangoLanguage structure is used to
 * represent a language.
 * 
 * #PangoLanguage pointers can be efficiently
 * copied and compared with each other.
 */
export class Language {
    /* Owm methods of Pango-1.0.Pango.Language */
    /**
     * Get a string that is representative of the characters needed to
     * render a particular language.
     * 
     * The sample text may be a pangram, but is not necessarily.  It is chosen to
     * be demonstrative of normal text in the language, as well as exposing font
     * feature requirements unique to the language.  It is suitable for use
     * as sample text in a font selection dialog.
     * 
     * If `language` is %NULL, the default language as found by
     * pango_language_get_default() is used.
     * 
     * If Pango does not have a sample string for `language,` the classic
     * "The quick brown fox..." is returned.  This can be detected by
     * comparing the returned pointer value to that returned for (non-existent)
     * language code "xx".  That is, compare to:
     * <informalexample><programlisting>
     * pango_language_get_sample_string (pango_language_from_string ("xx"))
     * </programlisting></informalexample>
     */
    get_sample_string(): string
    /**
     * Determines the scripts used to to write `language`.
     * If nothing is known about the language tag `language,`
     * or if `language` is %NULL, then %NULL is returned.
     * The list of scripts returned starts with the script that the
     * language uses most and continues to the one it uses least.
     * 
     * The value `num_script` points at will be set to the number
     * of scripts in the returned array (or zero if %NULL is returned).
     * 
     * Most languages use only one script for writing, but there are
     * some that use two (Latin and Cyrillic for example), and a few
     * use three (Japanese for example).  Applications should not make
     * any assumptions on the maximum number of scripts returned
     * though, except that it is positive if the return value is not
     * %NULL, and it is a small number.
     * 
     * The pango_language_includes_script() function uses this function
     * internally.
     * 
     * Note: while the return value is declared as PangoScript, the
     * returned values are from the GUnicodeScript enumeration, which
     * may have more values. Callers need to handle unknown values.
     */
    get_scripts(): Script[] | null
    /**
     * Determines if `script` is one of the scripts used to
     * write `language`. The returned value is conservative;
     * if nothing is known about the language tag `language,`
     * %TRUE will be returned, since, as far as Pango knows,
     * `script` might be used to write `language`.
     * 
     * This routine is used in Pango's itemization process when
     * determining if a supplied language tag is relevant to
     * a particular section of text. It probably is not useful for
     * applications in most circumstances.
     * 
     * This function uses pango_language_get_scripts() internally.
     * @param script a #PangoScript
     */
    includes_script(script: Script): boolean
    /**
     * Checks if a language tag matches one of the elements in a list of
     * language ranges. A language tag is considered to match a range
     * in the list if the range is '*', the range is exactly the tag,
     * or the range is a prefix of the tag, and the character after it
     * in the tag is '-'.
     * @param range_list a list of language ranges, separated by ';', ':',   ',', or space characters.   Each element must either be '*', or a RFC 3066 language range   canonicalized as by pango_language_from_string()
     */
    matches(range_list: string): boolean
    /**
     * Gets the RFC-3066 format string representing the given language tag.
     */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Take a RFC-3066 format language tag as a string and convert it to a
     * #PangoLanguage pointer that can be efficiently copied (copy the
     * pointer) and compared with other language tags (compare the
     * pointer.)
     * 
     * This function first canonicalizes the string by converting it to
     * lowercase, mapping '_' to '-', and stripping all characters other
     * than letters and '-'.
     * 
     * Use pango_language_get_default() if you want to get the #PangoLanguage for
     * the current locale of the process.
     * @param language a string representing a language tag, or %NULL
     */
    static from_string(language: string | null): Language | null
    /**
     * Returns the #PangoLanguage for the current locale of the process.
     * Note that this can change over the life of an application.
     * 
     * On Unix systems, this is the return value is derived from
     * <literal>setlocale(LC_CTYPE, NULL)</literal>, and the user can
     * affect this through the environment variables LC_ALL, LC_CTYPE or
     * LANG (checked in that order). The locale string typically is in
     * the form lang_COUNTRY, where lang is an ISO-639 language code, and
     * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
     * Swedish as written in Finland or pt_BR for Portuguese as written in
     * Brazil.
     * 
     * On Windows, the C library does not use any such environment
     * variables, and setting them won't affect the behavior of functions
     * like ctime(). The user sets the locale through the Regional Options
     * in the Control Panel. The C library (in the setlocale() function)
     * does not use country and language codes, but country and language
     * names spelled out in English.
     * However, this function does check the above environment
     * variables, and does return a Unix-style locale string based on
     * either said environment variables or the thread's current locale.
     * 
     * Your application should call <literal>setlocale(LC_ALL, "");</literal>
     * for the user settings to take effect.  Gtk+ does this in its initialization
     * functions automatically (by calling gtk_set_locale()).
     * See <literal>man setlocale</literal> for more details.
     */
    static get_default(): Language
}
export abstract class LayoutClass {
    static name: string
}
/**
 * A #PangoLayoutIter structure can be used to
 * iterate over the visual extents of a #PangoLayout.
 * 
 * The #PangoLayoutIter structure is opaque, and
 * has no user-visible fields.
 */
export class LayoutIter {
    /* Owm methods of Pango-1.0.Pango.LayoutIter */
    /**
     * Determines whether `iter` is on the last line of the layout.
     */
    at_last_line(): boolean
    /**
     * Copies a #PangoLayoutIter.
     */
    copy(): LayoutIter | null
    /**
     * Frees an iterator that's no longer in use.
     */
    free(): void
    /**
     * Gets the Y position of the current line's baseline, in layout
     * coordinates (origin at top left of the entire layout).
     */
    get_baseline(): number
    /**
     * Gets the extents of the current character, in layout coordinates
     * (origin is the top left of the entire layout). Only logical extents
     * can sensibly be obtained for characters; ink extents make sense only
     * down to the level of clusters.
     */
    get_char_extents(): /* logical_rect */ Rectangle
    /**
     * Gets the extents of the current cluster, in layout coordinates
     * (origin is the top left of the entire layout).
     */
    get_cluster_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets the current byte index. Note that iterating forward by char
     * moves in visual order, not logical order, so indexes may not be
     * sequential. Also, the index may be equal to the length of the text
     * in the layout, if on the %NULL run (see pango_layout_iter_get_run()).
     */
    get_index(): number
    /**
     * Gets the layout associated with a #PangoLayoutIter.
     */
    get_layout(): Layout
    /**
     * Obtains the extents of the #PangoLayout being iterated
     * over. `ink_rect` or `logical_rect` can be %NULL if you
     * aren't interested in them.
     */
    get_layout_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets the current line.
     * 
     * Use the faster pango_layout_iter_get_line_readonly() if you do not plan
     * to modify the contents of the line (glyphs, glyph widths, etc.).
     */
    get_line(): LayoutLine
    /**
     * Obtains the extents of the current line. `ink_rect` or `logical_rect`
     * can be %NULL if you aren't interested in them. Extents are in layout
     * coordinates (origin is the top-left corner of the entire
     * #PangoLayout).  Thus the extents returned by this function will be
     * the same width/height but not at the same x/y as the extents
     * returned from pango_layout_line_get_extents().
     */
    get_line_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets the current line for read-only access.
     * 
     * This is a faster alternative to pango_layout_iter_get_line(),
     * but the user is not expected
     * to modify the contents of the line (glyphs, glyph widths, etc.).
     */
    get_line_readonly(): LayoutLine
    /**
     * Divides the vertical space in the #PangoLayout being iterated over
     * between the lines in the layout, and returns the space belonging to
     * the current line.  A line's range includes the line's logical
     * extents, plus half of the spacing above and below the line, if
     * pango_layout_set_spacing() has been called to set layout spacing.
     * The Y positions are in layout coordinates (origin at top left of the
     * entire layout).
     * 
     * Note: Since 1.44, Pango uses line heights for placing lines,
     * and there may be gaps between the ranges returned by this
     * function.
     */
    get_line_yrange(): [ /* y0_ */ number, /* y1_ */ number ]
    /**
     * Gets the current run. When iterating by run, at the end of each
     * line, there's a position with a %NULL run, so this function can return
     * %NULL. The %NULL run at the end of each line ensures that all lines have
     * at least one run, even lines consisting of only a newline.
     * 
     * Use the faster pango_layout_iter_get_run_readonly() if you do not plan
     * to modify the contents of the run (glyphs, glyph widths, etc.).
     */
    get_run(): LayoutRun | null
    /**
     * Gets the extents of the current run in layout coordinates
     * (origin is the top left of the entire layout).
     */
    get_run_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets the current run. When iterating by run, at the end of each
     * line, there's a position with a %NULL run, so this function can return
     * %NULL. The %NULL run at the end of each line ensures that all lines have
     * at least one run, even lines consisting of only a newline.
     * 
     * This is a faster alternative to pango_layout_iter_get_run(),
     * but the user is not expected
     * to modify the contents of the run (glyphs, glyph widths, etc.).
     */
    get_run_readonly(): LayoutRun | null
    /**
     * Moves `iter` forward to the next character in visual order. If `iter` was already at
     * the end of the layout, returns %FALSE.
     */
    next_char(): boolean
    /**
     * Moves `iter` forward to the next cluster in visual order. If `iter`
     * was already at the end of the layout, returns %FALSE.
     */
    next_cluster(): boolean
    /**
     * Moves `iter` forward to the start of the next line. If `iter` is
     * already on the last line, returns %FALSE.
     */
    next_line(): boolean
    /**
     * Moves `iter` forward to the next run in visual order. If `iter` was
     * already at the end of the layout, returns %FALSE.
     */
    next_run(): boolean
    static name: string
}
/**
 * The #PangoLayoutLine structure represents one of the lines resulting
 * from laying out a paragraph via #PangoLayout. #PangoLayoutLine
 * structures are obtained by calling pango_layout_get_line() and
 * are only valid until the text, attributes, or settings of the
 * parent #PangoLayout are modified.
 * 
 * Routines for rendering PangoLayout objects are provided in
 * code specific to each rendering system.
 */
export class LayoutLine {
    /* Own fields of Pango-1.0.Pango.LayoutLine */
    /**
     * the layout this line belongs to, might be %NULL
     */
    layout: Layout
    /**
     * start of line as byte index into layout->text
     */
    start_index: number
    /**
     * length of line in bytes
     */
    length: number
    /**
     * list of runs in the
     *        line, from left to right
     */
    runs: LayoutRun[]
    /**
     * #TRUE if this is the first line of the paragraph
     */
    is_paragraph_start: number
    /**
     * #Resolved PangoDirection of line
     */
    resolved_dir: number
    /* Owm methods of Pango-1.0.Pango.LayoutLine */
    /**
     * Computes the logical and ink extents of a layout line. See
     * pango_font_get_glyph_extents() for details about the interpretation
     * of the rectangles.
     */
    get_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Computes the height of the line, ie the distance between
     * this and the previous lines baseline.
     */
    get_height(): /* height */ number
    /**
     * Computes the logical and ink extents of `layout_line` in device units.
     * This function just calls pango_layout_line_get_extents() followed by
     * two pango_extents_to_pixels() calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to pango_extents_to_pixels()).
     */
    get_pixel_extents(): [ /* ink_rect */ Rectangle, /* logical_rect */ Rectangle ]
    /**
     * Gets a list of visual ranges corresponding to a given logical range.
     * This list is not necessarily minimal - there may be consecutive
     * ranges which are adjacent. The ranges will be sorted from left to
     * right. The ranges are with respect to the left edge of the entire
     * layout, not with respect to the line.
     * @param start_index Start byte index of the logical range. If this value               is less than the start index for the line, then               the first range will extend all the way to the leading               edge of the layout. Otherwise it will start at the               leading edge of the first character.
     * @param end_index Ending byte index of the logical range. If this value               is greater than the end index for the line, then               the last range will extend all the way to the trailing               edge of the layout. Otherwise, it will end at the               trailing edge of the last character.
     */
    get_x_ranges(start_index: number, end_index: number): /* ranges */ number[]
    /**
     * Converts an index within a line to a X position.
     * @param index_ byte offset of a grapheme within the layout
     * @param trailing an integer indicating the edge of the grapheme to retrieve            the position of. If > 0, the trailing edge of the grapheme,            if 0, the leading of the grapheme.
     */
    index_to_x(index_: number, trailing: boolean): /* x_pos */ number
    /**
     * Increase the reference count of a #PangoLayoutLine by one.
     */
    ref(): LayoutLine
    /**
     * Decrease the reference count of a #PangoLayoutLine by one.
     * If the result is zero, the line and all associated memory
     * will be freed.
     */
    unref(): void
    /**
     * Converts from x offset to the byte index of the corresponding
     * character within the text of the layout. If `x_pos` is outside the line,
     * `index_` and `trailing` will point to the very first or very last position
     * in the line. This determination is based on the resolved direction
     * of the paragraph; for example, if the resolved direction is
     * right-to-left, then an X position to the right of the line (after it)
     * results in 0 being stored in `index_` and `trailing`. An X position to the
     * left of the line results in `index_` pointing to the (logical) last
     * grapheme in the line and `trailing` being set to the number of characters
     * in that grapheme. The reverse is true for a left-to-right line.
     * @param x_pos the X offset (in Pango units)             from the left edge of the line.
     */
    x_to_index(x_pos: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    static name: string
}
/**
 * The #PangoLogAttr structure stores information
 * about the attributes of a single character.
 */
export class LogAttr {
    /* Own fields of Pango-1.0.Pango.LogAttr */
    /**
     * if set, can break line in front of character
     */
    is_line_break: number
    /**
     * if set, must break line in front of character
     */
    is_mandatory_break: number
    /**
     * if set, can break here when doing character wrapping
     */
    is_char_break: number
    /**
     * is whitespace character
     */
    is_white: number
    /**
     * if set, cursor can appear in front of character.
     * i.e. this is a grapheme boundary, or the first character
     * in the text.
     * This flag implements Unicode's
     * <ulink url="http://www.unicode.org/reports/tr29/">Grapheme
     * Cluster Boundaries</ulink> semantics.
     */
    is_cursor_position: number
    /**
     * is first character in a word
     */
    is_word_start: number
    /**
     * is first non-word char after a word
     * Note that in degenerate cases, you could have both `is_word_start`
     * and `is_word_end` set for some character.
     */
    is_word_end: number
    /**
     * is a sentence boundary.
     * There are two ways to divide sentences. The first assigns all
     * inter-sentence whitespace/control/format chars to some sentence,
     * so all chars are in some sentence; `is_sentence_boundary` denotes
     * the boundaries there. The second way doesn't assign
     * between-sentence spaces, etc. to any sentence, so
     * `is_sentence_start/``is_sentence_end` mark the boundaries of those sentences.
     */
    is_sentence_boundary: number
    /**
     * is first character in a sentence
     */
    is_sentence_start: number
    /**
     * is first char after a sentence.
     * Note that in degenerate cases, you could have both `is_sentence_start`
     * and `is_sentence_end` set for some character. (e.g. no space after a
     * period, so the next sentence starts right away)
     */
    is_sentence_end: number
    /**
     * if set, backspace deletes one character
     * rather than the entire grapheme cluster. This
     * field is only meaningful on grapheme
     * boundaries (where `is_cursor_position` is
     * set).  In some languages, the full grapheme
     * (e.g.  letter + diacritics) is considered a
     * unit, while in others, each decomposed
     * character in the grapheme is a unit. In the
     * default implementation of pango_break(), this
     * bit is set on all grapheme boundaries except
     * those following Latin, Cyrillic or Greek base characters.
     */
    backspace_deletes_character: number
    /**
     * is a whitespace character that can possibly be
     * expanded for justification purposes. (Since: 1.18)
     */
    is_expandable_space: number
    /**
     * is a word boundary, as defined by UAX#29.
     * More specifically, means that this is not a position in the middle
     * of a word.  For example, both sides of a punctuation mark are
     * considered word boundaries.  This flag is particularly useful when
     * selecting text word-by-word.
     * This flag implements Unicode's
     * <ulink url="http://www.unicode.org/reports/tr29/">Word
     * Boundaries</ulink> semantics. (Since: 1.22)
     */
    is_word_boundary: number
    static name: string
}
export class Map {
    static name: string
}
export class MapEntry {
    static name: string
}
/**
 * A structure specifying a transformation between user-space
 * coordinates and device coordinates. The transformation
 * is given by
 * 
 * <programlisting>
 * x_device = x_user * matrix->xx + y_user * matrix->xy + matrix->x0;
 * y_device = x_user * matrix->yx + y_user * matrix->yy + matrix->y0;
 * </programlisting>
 */
export class Matrix {
    /* Own fields of Pango-1.0.Pango.Matrix */
    /**
     * 1st component of the transformation matrix
     */
    xx: number
    /**
     * 2nd component of the transformation matrix
     */
    xy: number
    /**
     * 3rd component of the transformation matrix
     */
    yx: number
    /**
     * 4th component of the transformation matrix
     */
    yy: number
    /**
     * x translation
     */
    x0: number
    /**
     * y translation
     */
    y0: number
    /* Owm methods of Pango-1.0.Pango.Matrix */
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first applying transformation
     * given by `new_matrix` then applying the original transformation.
     * @param new_matrix a #PangoMatrix
     */
    concat(new_matrix: Matrix): void
    /**
     * Copies a #PangoMatrix.
     */
    copy(): Matrix | null
    /**
     * Free a #PangoMatrix created with pango_matrix_copy().
     */
    free(): void
    /**
     * Returns the scale factor of a matrix on the height of the font.
     * That is, the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.  If the scale in the X
     * coordinate is needed as well, use pango_matrix_get_font_scale_factors().
     */
    get_font_scale_factor(): number
    /**
     * Calculates the scale factor of a matrix on the width and height of the font.
     * That is, `xscale` is the scale factor in the direction of the X coordinate,
     * and `yscale` is the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.
     * 
     * Note that output numbers will always be non-negative.
     */
    get_font_scale_factors(): [ /* xscale */ number, /* yscale */ number ]
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first rotating by `degrees` degrees
     * counter-clockwise then applying the original transformation.
     * @param degrees degrees to rotate counter-clockwise
     */
    rotate(degrees: number): void
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first scaling by `sx` in the X direction
     * and `sy` in the Y direction then applying the original
     * transformation.
     * @param scale_x amount to scale by in X direction
     * @param scale_y amount to scale by in Y direction
     */
    scale(scale_x: number, scale_y: number): void
    /**
     * Transforms the distance vector (`dx,``dy)` by `matrix`. This is
     * similar to pango_matrix_transform_point() except that the translation
     * components of the transformation are ignored. The calculation of
     * the returned vector is as follows:
     * 
     * <programlisting>
     * dx2 = dx1 * xx + dy1 * xy;
     * dy2 = dx1 * yx + dy1 * yy;
     * </programlisting>
     * 
     * Affine transformations are position invariant, so the same vector
     * always transforms to the same vector. If (`x1`,`y1`) transforms
     * to (`x2`,`y2`) then (`x1`+`dx1`,`y1`+`dy1`) will transform to
     * (`x1`+`dx2`,`y1`+`dy2`) for all values of `x1` and `x2`.
     * @param dx in/out X component of a distance vector
     * @param dy in/out Y component of a distance vector
     */
    transform_distance(dx: number, dy: number): [ /* dx */ number, /* dy */ number ]
    /**
     * First transforms the `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.  The rectangle should be in device units
     * (pixels).
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * For better accuracy, you should use pango_matrix_transform_rectangle() on
     * original rectangle in Pango units and convert to pixels afterward
     * using pango_extents_to_pixels()'s first argument.
     * @param rect in/out bounding box in device units, or %NULL
     */
    transform_pixel_rectangle(rect: Rectangle | null): /* rect */ Rectangle | null
    /**
     * Transforms the point (`x,` `y)` by `matrix`.
     * @param x in/out X position
     * @param y in/out Y position
     */
    transform_point(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * First transforms `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.  The rectangle should be in Pango units.
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * If you have a rectangle in device units (pixels), use
     * pango_matrix_transform_pixel_rectangle().
     * 
     * If you have the rectangle in Pango units and want to convert to
     * transformed pixel bounding box, it is more accurate to transform it first
     * (using this function) and pass the result to pango_extents_to_pixels(),
     * first argument, for an inclusive rounded rectangle.
     * However, there are valid reasons that you may want to convert
     * to pixels first and then transform, for example when the transformed
     * coordinates may overflow in Pango units (large matrix translation for
     * example).
     * @param rect in/out bounding box in Pango units, or %NULL
     */
    transform_rectangle(rect: Rectangle | null): /* rect */ Rectangle | null
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first translating by (`tx,` `ty)`
     * then applying the original transformation.
     * @param tx amount to translate in the X direction
     * @param ty amount to translate in the Y direction
     */
    translate(tx: number, ty: number): void
    static name: string
}
/**
 * The #PangoRectangle structure represents a rectangle. It is frequently
 * used to represent the logical or ink extents of a single glyph or section
 * of text. (See, for instance, pango_font_get_glyph_extents())
 */
export class Rectangle {
    /* Own fields of Pango-1.0.Pango.Rectangle */
    /**
     * X coordinate of the left side of the rectangle.
     */
    x: number
    /**
     * Y coordinate of the the top side of the rectangle.
     */
    y: number
    /**
     * width of the rectangle.
     */
    width: number
    /**
     * height of the rectangle.
     */
    height: number
    static name: string
}
/**
 * Class structure for #PangoRenderer.
 * 
 * The following vfuncs take user space coordinates in Pango units
 * and have default implementations:
 * - draw_glyphs
 * - draw_rectangle
 * - draw_error_underline
 * - draw_shape
 * - draw_glyph_item
 * 
 * The default draw_shape implementation draws nothing.
 * 
 * The following vfuncs take device space coordinates as doubles
 * and must be implemented:
 * - draw_trapezoid
 * - draw_glyph
 */
export abstract class RendererClass {
    /* Own fields of Pango-1.0.Pango.RendererClass */
    draw_glyphs: (renderer: Renderer, font: Font, glyphs: GlyphString, x: number, y: number) => void
    draw_rectangle: (renderer: Renderer, part: RenderPart, x: number, y: number, width: number, height: number) => void
    draw_error_underline: (renderer: Renderer, x: number, y: number, width: number, height: number) => void
    draw_shape: (renderer: Renderer, attr: AttrShape, x: number, y: number) => void
    draw_trapezoid: (renderer: Renderer, part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number) => void
    draw_glyph: (renderer: Renderer, font: Font, glyph: Glyph, x: number, y: number) => void
    part_changed: (renderer: Renderer, part: RenderPart) => void
    begin: (renderer: Renderer) => void
    end: (renderer: Renderer) => void
    prepare_run: (renderer: Renderer, run: LayoutRun) => void
    draw_glyph_item: (renderer: Renderer, text: string | null, glyph_item: GlyphItem, x: number, y: number) => void
    static name: string
}
export class RendererPrivate {
    static name: string
}
/**
 * A #PangoScriptIter is used to iterate through a string
 * and identify ranges in different scripts.
 */
export class ScriptIter {
    /* Owm methods of Pango-1.0.Pango.ScriptIter */
    /**
     * Frees a #PangoScriptIter created with pango_script_iter_new().
     */
    free(): void
    /**
     * Gets information about the range to which `iter` currently points.
     * The range is the set of locations p where *start <= p < *end.
     * (That is, it doesn't include the character stored at *end)
     * 
     * Note that while the type of the `script` argument is declared
     * as PangoScript, as of Pango 1.18, this function simply returns
     * GUnicodeScript values. Callers must be prepared to handle unknown
     * values.
     */
    get_range(): [ /* start */ string, /* end */ string, /* script */ Script ]
    /**
     * Advances a #PangoScriptIter to the next range. If `iter`
     * is already at the end, it is left unchanged and %FALSE
     * is returned.
     */
    next(): boolean
    static name: string
    static new(text: string, length: number): ScriptIter
    constructor(text: string, length: number)
    /* Static methods and pseudo-constructors */
    static new(text: string, length: number): ScriptIter
}
/**
 * A #PangoTabArray struct contains an array
 * of tab stops. Each tab stop has an alignment and a position.
 */
export class TabArray {
    /* Owm methods of Pango-1.0.Pango.TabArray */
    /**
     * Copies a #PangoTabArray
     */
    copy(): TabArray
    /**
     * Frees a tab array and associated resources.
     */
    free(): void
    /**
     * Returns %TRUE if the tab positions are in pixels, %FALSE if they are
     * in Pango units.
     */
    get_positions_in_pixels(): boolean
    /**
     * Gets the number of tab stops in `tab_array`.
     */
    get_size(): number
    /**
     * Gets the alignment and position of a tab stop.
     * @param tab_index tab stop index
     */
    get_tab(tab_index: number): [ /* alignment */ TabAlign, /* location */ number ]
    /**
     * If non-%NULL, `alignments` and `locations` are filled with allocated
     * arrays of length pango_tab_array_get_size(). You must free the
     * returned array.
     */
    get_tabs(): [ /* alignments */ TabAlign, /* locations */ number[] ]
    /**
     * Resizes a tab array. You must subsequently initialize any tabs that
     * were added as a result of growing the array.
     * @param new_size new size of the array
     */
    resize(new_size: number): void
    /**
     * Sets the alignment and location of a tab stop.
     * `alignment` must always be #PANGO_TAB_LEFT in the current
     * implementation.
     * @param tab_index the index of a tab stop
     * @param alignment tab alignment
     * @param location tab location in Pango units
     */
    set_tab(tab_index: number, alignment: TabAlign, location: number): void
    static name: string
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
    constructor(initial_size: number, positions_in_pixels: boolean)
    /* Static methods and pseudo-constructors */
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
}
    export type Glyph = number
    export type GlyphUnit = number
    export type LayoutRun = GlyphItem