from zipfile import ZipFile, ZIP_DEFLATED
from pathlib import Path
from xml.sax.saxutils import escape
import csv
import datetime as dt

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "personal-trainer-session-tracker.xlsx"

SHEETS = [
    "Dashboard",
    "Clients",
    "Packages",
    "Sessions",
    "Payments",
    "Mobile Input",
    "Renewal Checklist",
    "Quick Start Guide",
]


def col_name(n):
    result = ""
    while n:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result


def load_csv(name):
    with open(ROOT / name, newline="", encoding="utf-8") as f:
        return list(csv.reader(f))


def inline_cell(ref, value, style=0):
    attrs = f' r="{ref}"'
    if style:
        attrs += f' s="{style}"'
    if value is None or value == "":
        return f'<c{attrs}/>'
    if isinstance(value, (int, float)):
        return f'<c{attrs}><v>{value}</v></c>'
    if isinstance(value, str) and value.startswith("="):
        return f'<c{attrs}><f>{escape(value[1:])}</f></c>'
    return f'<c{attrs} t="inlineStr"><is><t>{escape(str(value))}</t></is></c>'


def rows_xml(rows, header=True):
    out = []
    for r_idx, row in enumerate(rows, start=1):
        cells = []
        for c_idx, value in enumerate(row, start=1):
            style = 1 if header and r_idx == 1 else 0
            if r_idx == 1 and len(row) == 1:
                style = 2
            cells.append(inline_cell(f"{col_name(c_idx)}{r_idx}", value, style))
        out.append(f'<row r="{r_idx}">{"".join(cells)}</row>')
    return "".join(out)


def sheet_xml(rows, widths=None, freeze=False):
    max_col = max(len(r) for r in rows) if rows else 1
    max_row = len(rows)
    cols = ""
    if widths:
        col_defs = []
        for idx, width in enumerate(widths, start=1):
            col_defs.append(f'<col min="{idx}" max="{idx}" width="{width}" customWidth="1"/>')
        cols = f"<cols>{''.join(col_defs)}</cols>"
    pane = ""
    if freeze:
        pane = '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>'
    else:
        pane = '<sheetViews><sheetView workbookViewId="0"/></sheetViews>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<dimension ref="A1:{col_name(max_col)}{max_row}"/>
{pane}
{cols}
<sheetData>{rows_xml(rows)}</sheetData>
</worksheet>'''


def dashboard_rows():
    return [
        ["Personal Trainer Client, Session & Payment Tracker"],
        [""],
        ["Metric", "Value"],
        ["Active Clients", '=COUNTIF(Clients!E:E,"Active")'],
        ["Total Package Revenue", "=SUM(Packages!F:F)"],
        ["Total Payments Received", "=SUM(Payments!E:E)"],
        ["Unpaid Balance", "=SUM(Packages!N:N)"],
        ["Completed Sessions", '=COUNTIF(Sessions!E:E,"Yes")'],
        ["Packages Needing Renewal", '=COUNTIF(Packages!M:M,"Renewal Needed")'],
        [""],
        ["Renewal Watchlist"],
        ["Client ID", "Package ID", "Package Name", "Sessions Purchased", "Completed", "Remaining", "Status"],
        ["C001", "PKG001", "10 Session Pack", 10, '=COUNTIFS(Sessions!C:C,B13,Sessions!E:E,"Yes")', "=D13-E13", '=IF(F13<=2,"Renewal Needed","OK")'],
        ["C002", "PKG002", "8 Session Pack", 8, '=COUNTIFS(Sessions!C:C,B14,Sessions!E:E,"Yes")', "=D14-E14", '=IF(F14<=2,"Renewal Needed","OK")'],
        ["C003", "PKG003", "12 Session Pack", 12, '=COUNTIFS(Sessions!C:C,B15,Sessions!E:E,"Yes")', "=D15-E15", '=IF(F15<=3,"Renewal Needed","OK")'],
        ["C004", "PKG004", "6 Session Pack", 6, '=COUNTIFS(Sessions!C:C,B16,Sessions!E:E,"Yes")', "=D16-E16", '=IF(F16<=2,"Renewal Needed","OK")'],
        ["C005", "PKG005", "Trial Session", 1, '=COUNTIFS(Sessions!C:C,B17,Sessions!E:E,"Yes")', "=D17-E17", '=IF(F17<=1,"Renewal Needed","OK")'],
        ["C006", "PKG006", "20 Session Pack", 20, '=COUNTIFS(Sessions!C:C,B18,Sessions!E:E,"Yes")', "=D18-E18", '=IF(F18<=4,"Renewal Needed","OK")'],
        ["C007", "PKG007", "5 Session Pack", 5, '=COUNTIFS(Sessions!C:C,B19,Sessions!E:E,"Yes")', "=D19-E19", '=IF(F19<=1,"Renewal Needed","OK")'],
        ["C008", "PKG008", "10 Session Pack", 10, '=COUNTIFS(Sessions!C:C,B20,Sessions!E:E,"Yes")', "=D20-E20", '=IF(F20<=2,"Renewal Needed","OK")'],
        ["C009", "PKG009", "4 Session Starter", 4, '=COUNTIFS(Sessions!C:C,B21,Sessions!E:E,"Yes")', "=D21-E21", '=IF(F21<=1,"Renewal Needed","OK")'],
        ["C010", "PKG010", "10 Session Pack", 10, '=COUNTIFS(Sessions!C:C,B22,Sessions!E:E,"Yes")', "=D22-E22", '=IF(F22<=2,"Renewal Needed","OK")'],
    ]


def package_rows():
    rows = load_csv("packages.csv")
    rows[0] += ["Completed Sessions", "Remaining Sessions", "Renewal Status", "Balance Due"]
    for idx in range(2, len(rows) + 1):
        rows[idx - 1] += [
            f'=COUNTIFS(Sessions!C:C,A{idx},Sessions!E:E,"Yes")',
            f"=E{idx}-K{idx}",
            f'=IF(L{idx}<=I{idx},"Renewal Needed","OK")',
            f"=F{idx}-G{idx}",
        ]
    return rows


def quick_start_rows():
    return [
        ["Quick Start Guide"],
        ["1. Add clients in the Clients tab."],
        ["2. Add packages in the Packages tab."],
        ["3. Log completed sessions in the Sessions tab."],
        ["4. Record payments in the Payments tab."],
        ["5. Check Dashboard for renewals, unpaid balances, and completed sessions."],
        ["6. Use Mobile Input for quick phone-friendly updates after each session."],
        [""],
        ["Important: This template does not send automatic emails, text messages, or reminders."],
    ]


def workbook_xml():
    sheets = []
    for idx, name in enumerate(SHEETS, start=1):
        sheets.append(f'<sheet name="{escape(name)}" sheetId="{idx}" r:id="rId{idx}"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>{''.join(sheets)}</sheets>
<calcPr calcMode="auto" fullCalcOnLoad="1"/>
</workbook>'''


def workbook_rels():
    rels = []
    for idx in range(1, len(SHEETS) + 1):
        rels.append(f'<Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>')
    rels.append(f'<Relationship Id="rId{len(SHEETS)+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">{''.join(rels)}</Relationships>'''


def content_types():
    overrides = [
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
    ]
    for idx in range(1, len(SHEETS) + 1):
        overrides.append(f'<Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
{''.join(overrides)}
</Types>'''


def root_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''


def styles_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="3">
<font><sz val="11"/><name val="Calibri"/></font>
<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
<font><b/><sz val="16"/><color rgb="FF1F2937"/><name val="Calibri"/></font>
</fonts>
<fills count="3">
<fill><patternFill patternType="none"/></fill>
<fill><patternFill patternType="gray125"/></fill>
<fill><patternFill patternType="solid"><fgColor rgb="FF0F766E"/><bgColor indexed="64"/></patternFill></fill>
</fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="3">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFill="1" applyFont="1"/>
<xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
</cellXfs>
</styleSheet>'''


def main():
    data = {
        "Dashboard": dashboard_rows(),
        "Clients": load_csv("clients.csv"),
        "Packages": package_rows(),
        "Sessions": load_csv("sessions.csv"),
        "Payments": load_csv("payments.csv"),
        "Mobile Input": load_csv("mobile-input.csv"),
        "Renewal Checklist": load_csv("renewal-checklist.csv"),
        "Quick Start Guide": quick_start_rows(),
    }
    widths = {
        "Dashboard": [28, 18, 24, 18, 16, 16, 18],
        "Clients": [12, 20, 24, 16, 12, 22, 14, 16, 32],
        "Packages": [12, 12, 22, 14, 18, 12, 14, 16, 18, 28, 18, 18, 18, 14],
        "Sessions": [12, 12, 12, 14, 12, 16, 20, 16, 32],
        "Payments": [12, 12, 12, 14, 12, 16, 28],
        "Mobile Input": [14, 12, 12, 18, 18, 16, 32],
        "Renewal Checklist": [38, 34, 12],
        "Quick Start Guide": [90],
    }
    with ZipFile(OUT, "w", ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", content_types())
        z.writestr("_rels/.rels", root_rels())
        z.writestr("xl/workbook.xml", workbook_xml())
        z.writestr("xl/_rels/workbook.xml.rels", workbook_rels())
        z.writestr("xl/styles.xml", styles_xml())
        for idx, name in enumerate(SHEETS, start=1):
            z.writestr(f"xl/worksheets/sheet{idx}.xml", sheet_xml(data[name], widths.get(name), freeze=True))
    print(OUT)


if __name__ == "__main__":
    main()
