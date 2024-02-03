import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardEleveated]}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgUFRIYGBgYGBkbGRgaGxgZGBkZGhsaGxkZGRobJC0kGx0rIBkYJzclKS4wNDQ0GiM5PzkxPi8yNDABCwsLEA8QHhISHjIrIykyMDI2NTIyMjIyMjIyOzIyMjIyMjIyMjIyMjIyNTIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBFAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwYEBwj/xABDEAACAQIEAwUECAIJAwUAAAABAhEAAwQSITEFQVEGEyJhcTKBkaEjQlJyscHR8BThFSQzYoKSorLCB0PSJTSTs/H/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEEAAcAAgMBAAAAAAAAAQIRAwQSITETIjJBUWFxI4GRodHB/9oADAMBAAIRAxEAPwAjSFKnrunPFTgU1PQA4p4qNPNMB6kKgDUgaQE5p6hT0DJU4NRmnphRKnqINSoChCpCmAp6BUOKlURUgKSChCnikBT0WFESKVSimIp2FECag1WBag4oAraoGpkVHLTArNQIq3u6fu6AoopGrSlRK0WBCkTSNRIoARamzUiKagB81KlSpATmlNRpVEKJzTiog04NAD09NT0AKpioVKaBkqVMDT0DHFSFRpwaYEhUhUKkKYExUqrmpK1REWAVz4EmHkHR3AkzoDoR5VcGrj4XhHtq+ZWAe47LmLnwsZUeL2eZgaa1XKVSS+bJJWmzvqQFV5qkDVhEsimy02almoHwJlqsrU2amoEyGWosKsqBFOwK6Y1IiommMaoMKnUKTEQK1AirDUTTEVMKjFWUxoBEKVSilQFCpVGpA1EYqcGmri4sLndMbThWAnVc2YDdQJ0JqMpUmxpchp+EXUBukShC6DUrEyT5aj4VzUGTjONQMneBiWdIez4SFQODNtgQGBIE81M0Vw5fIM4UPHiCklZ5wSAYrNpcspWmWZYKPRbTimFPWsqHqS1GpKKiCJimNPTGmhjilTA09SAeanbQsYUEk8hUAOVaDhVlV5a8zz/kKzajULEvstx43N/RXwnh1wQ7FFbeAM5A00mQJ3Gk70XbCMwhnkERBVattnnyjTyq4N+tclzcpbm+TZtUVSXBl8fwt7fiAzLzI5eo/OuCt1vWd41wwLNy2IH1lGw8x+ldDT6m6jL/ACZcuL3iBppE1Camda3MziL02emC1BtDQFFs0zGlmqt2oChE1EmlNMTTARNQdwBJMDrSY0G7Rd9kDW2AUe2MuZyfqlZ8Oh6iq8ktsWyUVboODAsiF8wILEmDOXNsPPlVJrNYZca0WziLyAFQTFllDZM7iAolQcqzzJPSDol0ETPnpr56VVpskpJqXsSyxSfAqY05qJNaSpCmlUaVAxU4FKKcVW2Aslc3EXuKma0qswIkNOq84jntXYtNeTT4fM1DLzB/hOK5RK2mLS33lzD2WABaAXDzEaGSJjTaoWXJUErlJE5SQSPIkb1rLb/QnSRlI5dKyyisWgfqdl+pXQ4p4poqVdKzJQhUhSVakVqNkkhppTThamLZosdFdKasZIqGRpkKSsGWgwDKwCdhuae9IdMpOJi4F8gdfM1ocFiRIgTuSZHw11NYriF/JeMkAQBrtqP38K7sLxldg7765AZ6x0jSK4uqblNs24XUUb9LvhzAz5R68q6bb6xrtWJs8dH2Lh1gTlg6cwZ13+FEsNx4bd2+2uqk7CNd6zqTTLmk0akn1/Ck2oO0HcfrQK3x1D9S58ARPrNdFvi9pjHeAGfreHXprv8AGp7yO0zmNtZLjJyB09Nx8jUS1dXFHzXHZRMqI0kyFHIVxuI0Oh5g6EetdrHk3RV90jnzhUmSDVF9ajmppqwQ5NRNI1GnYCNRJpzTE00yLImhPHblxVTuwMpPiOszoVgDlvz5Ciprh4ofAPvr+dV5uYMeP1ItwmGxfdFw6GBMG2pEcwzBp5+tXUcwS/1Zx/cMcuVA6y6HqTLtR2hjTGmY001vM4qVNSoAnTgU1OKrGWIKldOn+Jf9wqKtXNj+IW7eTvCQC0iFLTlIaIHPSqczqLf0WQXmRtrDfR78jyMn0+NZcURsdpbASCXA6m3cA3jcLt/PpQ1HVvErBlOxGx+NYtFLlo0ahdMd00moAVYajFdKzK0ODSpqlbu2DbDrirbOYGTOk7kAqAZJ1/CoSyKLSfuSUW+ixDG9Whq5jr12J2kchqeW/wAq6byEE+pPzioyyLdVjUHVjPcQZc2zNH5/lWpwOHtZAMgAIGhnWfM15p2nN23lZb0J4VyIilyxjYkGQdNKuw912xowX8bfDBVJcJbyKxQOEOmnhI12nSsGom3JfBpxpJUEu3GAt2oIY5HdPAJMFVufqPhQ/homMmHDbe2RyM8pMe6ifZfEtiVZnxTXVGYKbltVKhTvCRKsIYEydaP2sOgAUXV9yvEemb5Vmm3JlsUlyDcLavRpZQehfoRuUGup+XSiFuxf37tNdTvA3PTzO3lUxbCmBdH+VyfeM1ObfPvgPUPPvh6htJWMUuxrYQ+952Guqct99ya5cZ3cHPadNDJWGE9YUn4kCuvJI/8AcLGmyvz2+vTHDhpi8DpzDn/npTcQTOfggtkydWBK6k6QdfDz9aJ8Q4dbuKSq5XjQjSSORG0GvNgbr4u+nfXlyJcuIqICXVWjLbES5kRz1MVZgMZcuWkvLjsSjNiBYysiPkuET4+QXbWOY0mrozkpWit01TDnd1Ejz+Y/DeoYZLiyt24HeQC8BASWYDQD05+6rcvhzjUEaEQecaa6/wAq6fiqueDHsIxSpr7qgLMwAHWBUz3XhFu+lyRJysrMvkwBMb1Z4kU1H3ZHa6sqaoVcUqDirLIsrNcHFfZTf2129GokyzQXjONRWS22bNIfQE6ajl76qzySgx44vcjZcPT6Fp5qen2aAV0cM7R28mXuL5GU6i3Ow9ZO+3ka5VcEAqSVOoJGUx5g7Vk0MvUi/UrpjmoVM0xFdBMzEaVPFKnuAeacGo04NQbJUOKToGyggEZl0O2hmlNJB40++PwNU5n5H+McF5ka6xYtlNUEHTYb+6szAHhAgAkCtThmIWByHv2Jg+dZW+fE33j+NYtE/MzVqekPNPVQNTBromQnUMNgD3YvHDssk6hwQCzCWIMae/3VIGjiN/Uh6L+IrLqHUo/pfiVp/gCu3sisYmRETHMVw47Hu9wXQCmVGUKM2RgTIzBxqwgQRHOiESDpPh058xQe3ipuG2REB+kEhWkED0rNqJfyFmP0mufhougE2iQMhBMbrlYFfFprHwNV2OCqt1rotNnYqWbMYLBQg0LRso0rrx+LNrDo5BMIkQYJJEAeX8qzmF7U3Bci4ngJiVLDJynUnN8ufpWdyb7ZckkG+CcPS1nS1bKIEb2jMnb7RMaCuzDondSbYc5oMEroBIPyruuMAzafU/CJ/Ga41fLaBU+EkiegymTNFpDosZbftC2NPN+h12gjTl6b0xuLztgAGPamdJ8MDb86x3EeN3GlbXgWT4h7bE6kjku/L+VBbWKu2zmFxgTqZ1k85B399RbA9Jv3kG1qfRiAd+o5a1a6RcyjQRPPprqTrImsvwTjve5lcZbkEg8ngGd9RuTE1qSv0wGYiVOnLnTXIwXh8O3eLdFtldFZFeBGV8rud41IGp1maccKMue5Pju982mhuAAZ99PZHlVnFsf3dpLmUkwoUA5cxI5nkND8KzWG7U3FuRdUZWYCVLApMAHfUfz9KfRFtBh8EbmdGV1zgaqyo6mX8QJOnUHzGlW2eEJbtJaUsFRAgZgToIjM2gJ03Eb0WvXAhdyPZtgnrCydKG8E40MQzIyZWXVQdZXrMbzHxqW6V22Kl0AuMD6N5QuNioiYJgkV0W8H3SKe7ZM4J1II3mPL2qrx58LDzA/1AUc40Po7PkCPkP0rfJvxY/hmivLIEE1AmnLVE1rsoFQ3jKAhJWfHt7qJUO4t9T71U5vQyeP1I1fB8PbCAZF1BHswZjp0oAwrRcFBySBEjXafjWfujUjzP41m0T5l/RdqFwio01SIporomWhqVPFKgZXT1CacGoWMlVL461buILhYayIVjOhESKtqVhFa4mZQwDSAdpyn9aoz+hk8fqQcw/aGwF0F0TqZt3DI57Lp/I0Ge+jktbfMpJ1hhB6EMAZrW4bD2yh+jWY00UD0rLYpQLjgCAGOnTWsmjtTf4X6jorFTU1AVIV0LMtEmYgEgSQNBtPlrRKzjH/hQP4e4FIADeDy1ILaChhOlaQr/VPRB+ArHqn5o/powriQGwftf5f960G4jYC4o/euHpIKty94othidSBsAdp2YH8q4rwFxy+mYzOkbqR10061Rnf8jJwXlRs8RYV7aIQMsLoYiYMVi+02EtjOE+rAYEQASJEGt1ZICITJ0XUZd8p1I+NC7uCwl8uCucmC8OZMCJgHTes3uXtWgk5hmkSShFDcegGDaNP5wDt60QdTnbeO7Pu8/wAKpsWs9pRpBJkHWYE6j1o9gMQ1oKpMTAJ+H/5XAt1joQuuo300Gh+Neg47hiOhUqfGuWVAzezuNay+P7P9xFwZyu0nLoSANYPlTRFpoD4J4v2yBEOoJPMFo/AmvRXT6UHqjH8f3768+S19MhHK4o2HJhXpVxPpAdSMh57aGIHvptBFnLi8Oj21VgIUJAO2x2+Nef8AHLdvUptPPcGRI13r0YsMqTOirtl1EazO3Og54dgrgKhS0EkgXCTJjXRqS7CStBe4gdnDDe3l9RrI+dD8NYW3iAFULKEyB++lFV9szzQSOutUWsMhud4GMqGUiFiYJgwdI6UxmP4vcKoxys3jWcsSBmGoB31ge+jmOxLPZthrLp0ZshBMc4YkfyoPxH2W++v+9a0vGdcOh/vD/a1bZv8AliZo+iRnqVKka27jPQxNBeMY62LiI2aVIY+EkQekelGTQ3jCqcmaNCYn0FVZ3cGTx+oKcL7TWhp3dxhpGW253A306/lVJxCXJdCcrEkZlZDvsQ2tHeCWLXdibaj3DWg+LAFxwNgxj0nSsuj4ky/N6UUmmp6aujZlHpVGaVAFU0qhmpgapslRZNX4E/Sp7+U1zTV/DmXvV8SaAkyyiNR1I1qnPLyMnji9yNvbQBZHPrHy1rHY/wDtH+8a1OGxduNWQnqGT/yrOYzCO1x3GQKW0m5bH/Ksummoy5fsaM0XKPBxg04NWJgrh+xHL6S3r/q/cVJsE43Kf/In/lW7xY/Jl2S+Dnuk5TETGk7UaY4kWBIs5co0AeQI6zvE0NOCcg6psf8AuJ+tH3cdybYdMxWIzrvHMk6Vj1E1KUaZpwppOwVw4SxXkcoPoXUfnQhbOTEFYME3BM7hQ/6UYw1l0afBusnOhiGVvteVU4/B3Gv94mTLLah7Y9oEbF/M1XmalNtDimkjQ8Uw7PYRFMEhZJ0EAaz8KyXEcNcsw4AVl1BBmYPL9K2IvrCguo0EwyECNNNaC4+3cvKZYKGykIblt8mVWn62XU5djzrO+y19Gmb226d2fwqOGRQqwPrHr9k71w2seQQWK6qAQr2yfONdufXSuO5xe+ubu7VswzZM1xFGX6pMaz1+U71Z7CDOKbKMxBiCfKApJjpWYxvETcR7ZUeJSRBmMqqY+Z+FdOO4jin8KW7LAghj3iro1uCIncMeu1BreAxESRazZWH9onhlMoC+IZvZSSxnVt4AJXIPo4gsXLciDnWdo9odK9IuD6Ufcb8KwFnheJ7xHfJ4GRoFy3BKupI1P2Q2vWNOuiwXFsRmUXbdtZDlnW4hA9rIFU6/ZnXrUm1ZGMWdXE8I9yyiLAMLmmQCsNpMdctYrilq5acMPC6kEEHp06j9a2XD+IXGX6YIkAZfpEcEjNEQdNAp95oBxrC3LiEB1Zs7lZuJ7BywCWbQaHSoe5Jrg1l5Gl4MHuvCeYMGNqC8FwbWrpXNIKEnfUzvrz3+NdtjiilhnuKsooaXSVY7roYI13nlTXsWguqyujJkKk5kEHXcZteQ060AZjjGbK2UA+MSDzGbqNtY+FaHFi9/Dr3gTL4fZzSNDGpOvwoPfss5aMkB1I+kt6qGDExPLUe6jmNxYuW2t+GQy5WzpD6SecqRrv0rTKSeSLspjFqLVAMmmJqxsM0x4NpJzpHlz/cVQEfOywmUAQ3eW4O+bTNIiBy51r8WPyU7JfAi1D+K6lB1J/AUV/g7nRY694hHyahfFkKsk5dCT7SeQ61XlyRcWkyUINPo1fCPYWSTppodOXLT9/ANxD+1f7xojwbFILYbccjmTlpsWEc6HcT1uM4jKxkQQeQ6Gs+mklJluZNxOeaao0prfuMlDzSpppU9wgaOI2yqspLBgCIHIiRTf0ikE66egkdaznDR/Uc4OZgt5Y8QZYDMGnNG0xpOka1Zhrb3MG0De2+pkk+1zJisT1CXZrWnb6ftYUXtLhiwQOSSY9kjU7b+tazsxc+k7wITmtmIkE+MfpHwrwvDvDKRoQdN99wfUGvVeF8YuYZjksq8ggBw2g8PMan2QfeaqyZbVMnixtttHo6MT9U7jSYOm4Pl/KhvGu0mGw2bvbqgrklFYl/FEHIpkjX5VjeK9vr1q2xNlELSFIDnxZSBoTEDQ+6vMcRjnusbrkvcdpZyBLERG2nTTyqEeeSU248H0iLgMEWyVIkMJ1kSNJ03oXxztBhsJlOILW85IRQGYtlgswyztmUe+sFhP+ql1E7q5YtqU8IKhyTlGXWX3061me2PahscbJNtU7sONJklys5gSY9kc+dNXZFtVaZ7WeKK1kYgMBYNtXNwlwVRhOaPTymq+AcYsYtXfDuzhTBYZwQwg7MBrBG3WvDcXx+++HXDG59EokIoIHQZo0IGsT50T7G9qL+DRrdpEZXfMcwaZAUEBgRGgH86dEd3yev4PtLhbjvbXEI7WwzOpYwgXR2LdATE1HB9qsIWt2kxCO7iVCuW2nQkaTodN9DXgvDcQF77QQ9l1hp0DEERruCAZPv87OEYnu71i4NSjqY3mGB/lSdoN59Hvfyrr4Z28TL1O5MnSuNcUohiZ03BYzI0nWCYE14jx3jNzEZleMrYjE3Bp4ZK21CjcACJj+/50PwzZTacbqysAdpTKR8xSbB5KPaFxpOORMxCojmJ3OT9j3+daJ8USCTbaQdtdRG48q+d7z53ZrhLMdSWMnlGp9K9DwvbTEW7SDu0YLbUeLOWICgfa3NJyolje6z0dbpOX+9G+aNTtUluZp8B02131AkHlXnF3t3iQuQ4ZIPQODAidZ/c1Y/b/EgrGHtEZRPheBOpHtbgiPPeBtRvRJ8Oj0WdD4dvMkj386doEMZjeZ0942rzoducV7XcIA2g8LhdhEeL1+NAu0fbHEOFzIFU2b1vwhsv0gtySCTqMuk8mNCmnwhyW1Wz1m9ikIK50DMpgZ4nWCd53B2rmwuItxmRkb6uYNrK6EAjUmvnYXBodPAhC+RlmEdNWrmDwSV0KiQRyPURsfOpUVeJ9H0ob4mCSCNfaMbSQemlc9nj2HZ0RbttmuMyoA+bOyCXggnYR8RXi/Zfjdyxh8VADZ0+sCTJR0kR5HX7tBOBcQa1iMO4MC3eVwCYWSUDSRyIUT5Cj5JXwn8n0oomCGOhiAx95j30zXI5HfkW1j98q8V452xvDFJds3R7PiW2W7t4LwCu59phv06VyYDtxirVy5c7wsXDyjybaOxnMqTII9fWhWxuSTo9svupzM4yhAWYkmYAJO+sCCaD9n+M2saGawzEI2Uq4KSdwCNoOvwNeQYjtli2R0fEG5nV0Ysqg5XgNBHoB5SetdXYLit207m3qAASpmDOgJjp+dOXCthHl0j2prEAplgtzBJnbXXY1nuP2QuVoJ0IM6ncc96C4zt/etyxw6HKJMLdjWd32BOlZK/23xb3zdYgo4IFoiEURAAPtcgd6jG5DklHhnq3C3VcMrsVVddScsSTvOlCu3fElw2HS7kDSyhQDGeR9oTpAJ91eacT4/dxy2sKVS2quxkEw7HRZmYjUAf3qJ9q8Q68PtYcocltlCuSCToTBg6ekULyyT9wS3RddHGvb151w6R5M0/GtngsUt22txDo6hoO4nka8YrXnEuLWEyFgMsSPZYzAU8iRlOh61oWVp8lDha4O7i3bB7V57aWUIRisk6kjc01YrH3c113iMzs0dJYmKVG+XyG1Gt7LWi9u4oUNDKTJGXUEaToT4RXfxTCsmGunIAAhGhXQHTYGs52dvhWKHxZvZA1UMSAWYddBB5SaL8dUDDuxCyCuWBBBzjnWGa/k/wWJRq+b/0ZAMOe+kdOQ9a3eMxC27SXXPhYJGVlYklZ2BnYHesGBOseRPrIjWtviuCtiMPaClF8KsGPMZegE6zNWZYptWJRTvsswF+3fBNsZgpEh8imY6M0cjtQTtE578qAq5FVPDlgggMTIkTrGnSj/Beza2gwZ8+Yj6oAET1J/YrK8TZReuZAMveMoG+inKQR5joKjCKUnQpQSS+QjwzjLm7bssqFSFWWCg7blj+Jrm7XqReQEr/ZqRlKkas25XSdPwrW9nrNsWLbi2mcrLOFXMfEQJaJOnOsr2yxBbFAERktqBrMyS/u9v5VOKW60ScFGN+5Vdwjtgu9BhLd1kYSATnyFTEydjv1ru7KYc3Ld0CIk5mIkopt3AxjmdRHpXHav/8Ap123nE/xCOJ3YBYIH+aefsn1rr7JY427V9AyrK7mSzSjCEA0nTc9RRNeXn5DHNQd/v8Aszdo+E8vD+MD86tS7qkGCCdfUio8Nwz3GZEVmbKSAokmI3HSi2G4KRkZzlK6lDvIJI15SI0qU5xj2VSkl2c7OxtIYJAuXtdycyprG/1W+FWYXB3HVfDlUQZbTlyESaPYVbaqQHRE1PJ2nUwANRr1gVfg7T3IbMbaD68nO33Y/Hb1rO8rfSIx3TdRRx4fAWy3gXO8LoZOwAzbZUGnM86PYPAqhGz3PIjKv3RuT57+lK1dRALdqNeUSzHqTGpo/wAO4dlGYuA4iIGYSRJ+GnxPlCinLlm2GKOFXLl+30U4rszcuKG70KYEL7W8TPU/oK57fZN3YgXgAhCtpvAVpidPb+VaCy1xXBe4pUbAKQRzEGf1p8JilDXvNx/9ds9P1/IWUittydszHEOEXMMssQ9kkKxj2C22YckJ0nkfWhGIwWhNsZ0YGU9poO8D64jlv616HdxNt1ZGgqwIKnUEHQg1hMXa/hbndt40JJttqSF+y3WNvn6RlG+uyxbZLbP+n8GWxvCUuMWtsF5MAhCnlIG6nfSPhQXF4O4k5l3EyNRpvrXo+IsW7viko8RmGYEjow0zj50FxFrIclxQqtoHVSyN6gn10+RojllHsoyYZ438oC9nMTltYlCAc2HciZMMoiRG2jNr1igmFdVuIzCVDKSPIMCR8K15wyBXKqgDqVLLlCgR9kRlOo3g0EfgLFlW2c8nxQBKjTWJ151bDJFtkPEuky/tPhLNrGGzaJVFyCScxUnVtfLN8qNcU7LXIQWrinIpViZRnOY+KBI201PIVneOW3/izlHiYoV33gAb+Y+VbP8Api4pOcI4BPiVshPorwWPoKUpUkyyMoN3L3BXanCd3hdECy6qYRBJgn2l/etBuygJussKRkJIbKBoQefOi3a3iy3bComYE3MzBgNlTqCRMnaZrj7CD+sFiCVVHVtJADDw7anUH5U4ryVY9sd1J8BHiNtVtXsz2SuUhQoUkPJIWZ3ygjrpI8g/Dsfb7h8+HtsUKeLKubKWGbUjU6wB69Kp7Qd5mdSvgFxiCqkBgZykmIkDT9mufglrvLgtja4yhtB4VDqS3lAn404QqPLJZK3eVUai8toW0vJZRAQXBVQSchAZBpoSSFnzrm7WWm/hUuBfA7qQw5goxX8a6rXC0awgVlVrqgPMBg0h2EzrDL8BQ3tVgRatKBbRcze0uXkNhz5/KoJLcqvti20jJ1u+zVlGwgdredbbOXaCQpHik6aQpFYStPgWA4fcJVfaYT9YzkE/6vlVmXlL9IL7MzJpVGlVgjTdjADfJYT4G+RXX8vfWi7UMP4S4AIEpIAA+uvSs92KBOIYDT6JtOviXajfae8v8LcXOpMpoNT7anWNvfFVyrcXRXlbMN5Dbn6javSOE3M2HtEa+ADXqvhPzFeaKxB/cEfs1s8JcvNhUcsipBAllUmGIgLuduYNLI6VkISUbbNAcRbQ+O4PTc/Aa157iHDXHbcm4x26s36ijljFWkP0iB+hzlQPQd2Y+NA8Ws3mVGXK7EgjNlUMZgyJ8Ouw+NRxyvsjLIpGswV+4uGQNeSyAggN7bgndcst74FZLjtzNeJzlvCozHnprG/OtB3NiFXvWMAA/Ryum5nMDH+Gq7nCsLOYXFfyi4hHuIIquE1GTbKnkbfPS+wRhcK9zD5VgDvM2pIkhY29+9EeF4QWlZXto+Yg6l9ABsCI613YXAI3htkaa+0wAHqUqd9Ba0uWg5jcu4Ue9Qs/E1GWWUrS6ItSav2JYThiNLpaW2sas7ZV9BoWPzpndFIFtWL7fVdT5qpUFNY15U+E767rmIt75nDXFH3A+b4yB50Rw+CtW/Zza7s0Sw31iIHkKhT7Zqw6VzpvhfL/APCrD4UyHvlnbkpJdF6TPtH10/GuzEYpl1Bn3D4SZrnvP4thtsF0HzFE+HWCYuMcuUBl8I56AxPPl7jUoRb4OhJQwR4X/Wd3CsJk1YRcy5mGhFtfszyuHQnoNOdE7WwPm34VxYchCwkyUJJO7E7k1bYv+BfU/ganKS6XRhcnJ2+y+6+37+rQmxeMP7XtHc6Hwr7Pl+c13vdH79KEOSFclgQznIJnKAqggjkZn960k7ISZb/FajXmPxFEuKcOS+BbYbyQeYaDBFZh31H3h+Va17n0ifd/I0+nwKPJhkvm2xs3ABl9lss6cpOkA6R8OlE0u2yCpIIO6lQQau45w1b1tGkh1UiRGoI2b0/OgmGu3Ae6uTmGg5zH1T1PQ8x76c4uSuK/TZp8sfRN/n39EsTw90lrJZ05p7RA8gSQ48jr61wWjbunL4UPW4fCx5iFSE160ZTF5TqpDbbwKqx9pLhkAJcP1wAwaOTA+7Xf8KrSsqzaNXca/P8AgMxOGS0wFzDAH6rEPlPmjKQD+9Kr/iE0HgGu+Zw3zYj5U9y5ctMFupnVtgWdkbn4CpBB8tPSrU4fcuAuqJbX7LtcQf4WuIZ/zGk0znuDukv6BvaBi1kHMWysDrDECCNGiY122rk7OMQWhyh8PizMI3+x4hoaIvh01DC3I0MFyPcVTUVKzbw6LrdKn7KW3YH3uUH41ZGVR2ji3Ve4Q4ziry4Vx3iXbZUBnAUlSzAAEFlafMrWW7L4pbWJR3HhhgdCd1PIanlRm/fwr22TvHBI0LBVUHkYUsTryoZwXCqlwO7W2ClgFJeH0idFnLqehmKnB1F2W+I+2+jb28TbuGLbqx5qD4h6qdR8KCdurZFm2Y8IcgnmCVMD5H4VVj79u5GWzbSPsgEHzlreYHzzVw9oLbCws3c6l9F7xbkGDuCc66e75UoTTaRZ46kmjL1v+xNm2+FZHRWm6wbNG2VI9KwNbrsPi7a2WVnRT3hIDHLMqsAE6Hb1q+fQ8StmJuqJIBkAkA9ROhpqMcJ4Ob6M8fXI+QP50qkVlfCb5VmYckIPnJHI6ctvOuvHcSDWGQyWLLHgQBQDOj+1PkABvSpVS15yrfLdQBBrZcI4Tnw4dnyb6lAykZjzVs0/4fjvSpUs/SL4QUrv4Oz+grsEgoy9ROvPZoob3dq1KurDNuAiawZEnM3MTtSpVTEhkgo9El7vZVb3FB/xq1BaWC1t2EwAXUA+uVZpUqjKKKL5FjMUuYZLSIdgAqsZOmrMP0olhuGOIbEXG8rQYkDn4iND6DT1p6VEOjVp4qbcmdty/wBWOnKB+VczYgmdSB13NPSpyOtj7OjC2Ayi4xzIDlK7SxEhfTryMx1pXeI3IOcgnMDHITOk7mPPzpUqtfEODnZptzlfsFXaGb7hqlruW1m6GlSqpEWUnGSvu/Kh1u7z11YnXnCqKVKpexWyLv4h94fjWme740+7+tKlURxKc/hX0oJi7Pel8ujrJA2DIp5H6rKYj18qVKrsHqI5fSD8JiCfo7pBaJDQfEoOhMbMNJ+VdDEIYIkHb9zT0qqyKpujs6d78KbLWvKwyuJX3/Hf8KFcT4ZcUG7buM9tQSVZmlF8pPiHz9aVKiJRrMUdv9HNheIqEythrL8w2XIwH3kgn8aSWbjDMuGYqdouWwP9Qn40qVCXJx8fm7JfwraA4V50/wC5Z5/4a7bHDrjpBL21MzmyONoPssDEeVKlUqRdGCs5nwWHRou4z/Lbcn56D51TxnhtprDNYLvl8RZmVQAN/CVBOh60qVKPaCMFZja1XDMPcSwoAcZznPjXIykQPCBIMDmT6UqVaMvRGRrv+m2Cz4a6emIcf6LdNSpVMkf/2Q==',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agara, Uttar Pradesh</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal, an iconic white marble mausoleum in Agra, India,
            built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz
          </Text>
          <Text style={styles.cardFooter}>20 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardEleveated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#2C3335',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
    lineHeight: 15,
    fontWeight: '400',
  },
  cardFooter: {
    color: '#000000',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
