function Test-Url([string]$url, [string]$acceptLang = '') {
  try {
    $req = [Net.HttpWebRequest]::Create($url)
    $req.AllowAutoRedirect = $false
    if ($acceptLang) { $req.Headers.Add('Accept-Language', $acceptLang) }
    try {
      $resp = $req.GetResponse()
      $sr = New-Object IO.StreamReader($resp.GetResponseStream())
      $body = $sr.ReadToEnd()
      $sr.Close()
      return [PSCustomObject]@{ code = [int]$resp.StatusCode; body = $body }
    } catch [Net.WebException] {
      if ($_.Exception.Response) {
        $r = $_.Exception.Response
        $loc = $r.Headers['Location']
        $sr = New-Object IO.StreamReader($r.GetResponseStream())
        $body = $sr.ReadToEnd()
        $sr.Close()
        return [PSCustomObject]@{ code = [int]$r.StatusCode; body = $body; location = $loc }
      }
      return [PSCustomObject]@{ code = -1; body = $_.Exception.Message }
    }
  } catch {
    return [PSCustomObject]@{ code = -2; body = $_.Exception.Message }
  }
}

function Okey($cond) { if ($cond) { return 'OUI' } else { return 'NON' } }
function Lang($body) { if ($body -match '<html\s+lang=["'']([a-z]{2})["'']') { return $Matches[1] } else { return 'ABS' } }

$ProgressPreference = 'SilentlyContinue'

Write-Host "=== T1 : /de/unknown-x ==="
$r = Test-Url 'http://localhost:3107/de/unknown-x'
Write-Host "STATUS: $($r.code) ; html lang = $(Lang $r.body)"
Write-Host "Seite nicht gefunden? $(Okey ($r.body -match 'Seite nicht gefunden'))  |  Zur Startseite? $(Okey ($r.body -match 'Zur Startseite'))"

Write-Host ""
Write-Host "=== T2 : /en/does-not-exist ==="
$r = Test-Url 'http://localhost:3107/en/does-not-exist'
Write-Host "STATUS: $($r.code) ; html lang = $(Lang $r.body)"
Write-Host "Page not found? $(Okey ($r.body -match 'Page not found'))  |  Back to home? $(Okey ($r.body -match 'Back to home'))"

Write-Host ""
Write-Host "=== T3 : /fr/zzz ==="
$r = Test-Url 'http://localhost:3107/fr/zzz'
Write-Host "STATUS: $($r.code) ; html lang = $(Lang $r.body)"
Write-Host "Page introuvable? $(Okey ($r.body -match 'introuvable|Page introuvable'))"

Write-Host ""
Write-Host "=== T4 : /toto (sans locale) Accept-Language: fr ==="
$t = Test-Url 'http://localhost:3107/toto' 'fr-FR,fr;q=0.9'
if ($t.location) {
  Write-Host "307 Redirect -> $($t.location)"
  $r = Test-Url "http://localhost:3107$($t.location)"
  Write-Host "FINAL STATUS: $($r.code) ; html lang = $(Lang $r.body)"
  Write-Host "FR ? $(Okey ($r.body -match 'introuvable|Page introuvable|Retour'))"
} else {
  Write-Host "Pas de redirect - STATUS $($t.code)"
}

Write-Host ""
Write-Host "=== T5 : /toto (sans locale) Accept-Language: en ==="
$t = Test-Url 'http://localhost:3107/tata' 'en-US,en;q=0.9'
if ($t.location) {
  Write-Host "307 Redirect -> $($t.location)"
  $r = Test-Url "http://localhost:3106$($t.location)"
  Write-Host "FINAL STATUS: $($r.code) ; html lang = $(Lang $r.body)"
  Write-Host "EN Page not found ? $(Okey ($r.body -match 'Page not found'))"
} else {
  Write-Host "Pas de redirect - STATUS $($t.code)"
}
