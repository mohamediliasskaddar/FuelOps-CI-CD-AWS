package ma.fstt.gestionstation.controller;
import ma.fstt.gestionstation.dto.HistoCarbDTO;
import ma.fstt.gestionstation.entity.HistoCarb;
import ma.fstt.gestionstation.service.HistoCarbService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping("/api/prix")
@CrossOrigin(origins = "*")
public class HistoCarbController {

    private final HistoCarbService histoCarbService;

    public HistoCarbController(HistoCarbService histoCarbService) {
        this.histoCarbService = histoCarbService;
    }

    @GetMapping
    public List<HistoCarb> getAllHistoCarbs() {
        return histoCarbService.getAllHistoCarbs();
    }

    @GetMapping("/stations/{stationId}/carburants/{carburantId}")
    public List<HistoCarbDTO> getHistoriquePrix(
            @PathVariable Long stationId,
            @PathVariable Long carburantId) {
        List<HistoCarb> list = histoCarbService.getHistoriquePrix(stationId, carburantId);

         return list.stream().
                 map(h-> new HistoCarbDTO(
                         h.getId(),
                         h.getDate(),
                         h.getPrix(),
                         h.getStation().getNom(),
                         h.getStation().getVille(),
                         h.getCarburant().getNom()
                 )).toList();
    }
    @GetMapping("/full")
    public List<HistoCarbDTO> getAllHistoCarbFull() {
        List<HistoCarb> histos = histoCarbService.getAllHistoCarbs();
        return histos.stream().map(h -> new HistoCarbDTO(
                h.getId(),
                h.getDate(),
                h.getPrix(),
                h.getStation().getNom(),
                h.getStation().getVille(),
                h.getCarburant().getNom()
        )).collect(Collectors.toList());
    }

    @PostMapping("/stations/{stationId}/carburants/{carburantId}")
    public HistoCarb addPrix(
            @PathVariable Long stationId,
            @PathVariable Long carburantId,
            @RequestBody HistoCarbDTO histoCarbDTO) {
        return histoCarbService.addPrix(stationId, carburantId, histoCarbDTO);
    }


    @PutMapping("/{id}")
    public HistoCarb updatePrix(@PathVariable Long id, @RequestBody HistoCarbDTO histoCarbDTO) {
        return histoCarbService.updatePrix(id, histoCarbDTO);
    }


    @DeleteMapping("/{id}")
    public void deletePrix(@PathVariable Long id) {
        histoCarbService.deletePrix(id);
    }
}